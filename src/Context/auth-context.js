import { createContext, useContext, useReducer } from "react";
import axios from "axios";

const initialAuthData = {
	toastData: {
		display: false,
		data: "",
		status: ""
	},
	signedIn: false,
	userName: "",
	userEmail: "",
	userID: "",
	notes: [],
	archivedNotes: [],
}

const authReducer = (state, { type, payload }) => {
	switch (type) {
		case "LOGIN_SUCCESS":
			return { ...state, toastData: { display: true, data: payload.toastMessage, status: "success" }, signedIn: true, userName: payload.name, userEmail: payload.email, userID: payload.userID }
		case "LOGIN_ERROR":
			return { ...state, toastData: { display: true, data: payload.toastMessage, status: "alert" } }

		case "HANDLER_ERROR":
			return { ...state, toastData: { display: true, data: payload.toastMessage, status: "alert" } }

		case "REMOVE_TOAST":
			return { ...state, toastData: { ...state.toastData, display: false } }

		case "LOGOUT":
			return { ...state, toastData: { display: true, data: payload.toastMessage, status: "alert" }, signedIn: false, userName: payload.name, userEmail: payload.email, userID: payload.id }

		//Notes context
		case "GET_ALL_NOTES":
			return { ...state, toastData: { ...state.toastData, display: false }, notes: payload.data }

		case "ADD_NOTE":
			return { ...state, toastData: { display: true, data: payload.toastMessage, status: "success" }, notes: payload.data }

		case "DELETE_NOTE":
			return { ...state, toastData: { display: true, data: payload.toastMessage, status: "alert" }, notes: payload.data }

		case "UPDATE_NOTE":
			return { ...state, toastData: { display: true, data: payload.toastMessage, status: "success" }, notes: payload.data }

		case "ARCHIVE_NOTE":
			return { ...state, toastData: { display: true, data: payload.toastMessage, status: "success" }, notes: payload.notesData, archivedNotes: payload.archivedData }
		default:
			return { ...state }
	}
}



const AuthContext = createContext(initialAuthData)

const AuthProvider = ({ children }) => {

	const [authState, authDispatch] = useReducer(authReducer, initialAuthData)

	const signUp = async (userDetails) => {
		console.log('hello')
		try {

			const response = await axios.post('/api/auth/signup', {
				firstName: userDetails.firstName,
				lastName: userDetails.lastName,
				email: userDetails.email,
				password: userDetails.password
			})
			console.log(response);
			if (response.status === 201) {
				localStorage.setItem("tokenNotesApp", response.data.encodedToken);
				authDispatch({ type: "LOGIN_SUCCESS", payload: { toastMessage: "Signed up", name: response.data.createdUser.firstName, email: response.data.createdUser.email, userID: response.data.createdUser._id } })
			}
			else if (response.status === 422) {
				authDispatch({ type: "LOGIN_ERROR", payload: { toastMessage: "Account already exists" } })
			}
		} catch (error) {
			console.log(error);
			authDispatch({ type: "HANDLER_ERROR", payload: { toastMessage: "Handler error" } })
		}

	}

	const login = async (userDetails) => {
		console.log(userDetails, "Sent");
		try {
			const response = await axios.post("/api/auth/login", { email: userDetails.email, password: userDetails.password })
			if (response.status === 200) {
				console.log(response, "created");
				localStorage.setItem("tokenNotesApp", response.data.encodedToken)
				authDispatch({ type: "LOGIN_SUCCESS", payload: { toastMessage: "Logged In", name: response.data.foundUser.firstName, email: response.data.foundUser.email, userID: response.data.foundUser._id } })
			}
			else if (response.status === 404 || response.status === 401) {
				authDispatch({ type: "LOGIN_ERROR", payload: { toastMessage: "Invalid credentials" } })
			}
		} catch (error) {
			authDispatch({ type: "HANDLER_ERROR", payload: { toastMessage: "Handler error" } })
		}
	}

	const testlogin = async () => {
		const userEmail = "test123@gmail.com";
		const userPassword = "testLogin@123";
		console.log("Sent Test");
		try {
			const response = await axios.post("/api/auth/login", { email: userEmail, password: userPassword })
			console.log(response, "test login");
			if (response.status === 200) {
				localStorage.setItem("tokenNotesApp", response.data.encodedToken)
				authDispatch({ type: "LOGIN_SUCCESS", payload: { toastMessage: "Logged In", name: response.data.foundUser.firstName, email: response.data.foundUser.email, userID: response.data.foundUser._id } })
				console.log("finalState:", response.data.foundUser._id);
			}
			else if (response.status === 404 || response.status === 401) {
				authDispatch({ type: "LOGIN_ERROR", payload: { toastMessage: "Invalid credentials" } })
			}
		} catch (error) {
			authDispatch({ type: "HANDLER_ERROR", payload: { toastMessage: "Handler error" } })
		}
	}


	const logout = () => {
		authDispatch({ type: "LOGOUT", payload: { toastMessage: "Logged out", name: "", email: "", userID: "" } })
	}

	return (
		<AuthContext.Provider value={{ signUp, login, testlogin, logout, authState, authDispatch }}>
			{children}
		</AuthContext.Provider>
	)
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth }
