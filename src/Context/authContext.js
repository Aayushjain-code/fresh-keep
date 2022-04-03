import { createContext, useContext, useReducer } from "react";
import axios from "axios";
import { authReducer } from "./reducer";


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
	trashedNotes: [],
}



const AuthContext = createContext(initialAuthData)

const AuthProvider = ({ children }) => {

	const [authState, authDispatch] = useReducer(authReducer, initialAuthData)

	const signUp = async (userDetails) => {
		// console.log('hello')
		try {

			const response = await axios.post('/api/auth/signup', {
				firstName: userDetails.firstName,
				lastName: userDetails.lastName,
				email: userDetails.email,
				password: userDetails.password
			})
			// console.log(response);
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
		// console.log(userDetails, "Sent");
		try {
			const response = await axios.post("/api/auth/login", { email: userDetails.email, password: userDetails.password })
			if (response.status === 200) {
				// console.log(response, "created");
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
		// console.log("Sent Test");
		try {
			const response = await axios.post("/api/auth/login", { email: userEmail, password: userPassword })
			// console.log(response, "test login");
			if (response.status === 200) {
				localStorage.setItem("tokenNotesApp", response.data.encodedToken)
				authDispatch({ type: "LOGIN_SUCCESS", payload: { toastMessage: "Logged In", name: response.data.foundUser.firstName, email: response.data.foundUser.email, userID: response.data.foundUser._id } })
				// console.log("finalState:", response.data.foundUser._id);
			}
			else if (response.status === 404 || response.status === 401) {
				authDispatch({ type: "LOGIN_ERROR", payload: { toastMessage: "Invalid credentials" } })
			}
		} catch (error) {
			authDispatch({ type: "HANDLER_ERROR", payload: { toastMessage: "Handler error" } })
		}
	}


	const logout = () => {
		localStorage.clear();
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
