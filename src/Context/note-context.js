import axios from "axios";
import { createContext, useContext } from "react";
import { useAuth } from "./auth-context";


const NotesContext = createContext();

const NotesProvider = ({ children }) => {
	const { authDispatch } = useAuth();

	const config = {
		headers: {
			authorization: localStorage.getItem("tokenNotesApp")
		}
	}

	const getNotes = async () => {
		try {
			const response = await axios.get(
				"/api/notes",
				config
			)
			if (response.status === 200) {
				authDispatch({ type: "GET_ALL_NOTES", payload: { data: response.data.notes } })
			}
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<NotesContext.Provider value={{ getNotes }}>
			{children}
		</NotesContext.Provider>
	)
}

const useNotes = () => useContext(NotesContext);

export { NotesProvider, useNotes }
