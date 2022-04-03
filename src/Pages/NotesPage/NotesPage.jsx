import { useEffect, useState } from 'react'
import NewNote from './NewNote/NewNote'
import NoteCreate from './NoteCreate/NoteCreate'
import "./NotesPage.css"


import { useAuth } from "../../Context/authContext";
import { useNotes } from "../../Context/noteContext";
import { EditCard } from '../../Components/EditCard/EditCard';

const NotesPage = () => {

	const { authState } = useAuth();
	const { notes } = authState;
	const { getNotes, addNote } = useNotes();
	const [edit, setEdit] = useState({
		isEdit: false,
		editItem: {
			_id: null,
			pinned: false,
			title: "",
			description: "",
			tag: "Tag",
			priority: "Priority",
			selectedBackgroundColor: "#faf8f8",
		}
	});

	return (
		<>
			<div className="main-container">

				<div className="filter-container">
					<span className="filter-sub-heading">
						<label style={{ fontSize: '1.8rem' }}>Priority Sorting: </label>
						<br />
						<label>
							<input type="radio" name="group1"

							/> <span>High</span>
						</label>
						<br />
						<label>
							<input type="radio" name="group1"

							/> <span>Medium</span>
						</label>
						<br />
						<label>
							<input type="radio" name="group1"
							/> <span>Low</span>
						</label>
					</span>
					<span className="filter-sub-heading">
						<label style={{ fontSize: '1.8rem' }}>Sort By Date: </label>
						<br />
						<label>
							<input type="radio" name="group1"

							/> <span>Oldest</span>
						</label>
						<br />
						<label>
							<input type="radio" name="group1"

							/> <span>Newest</span>
						</label>

					</span>
				</div>

				<div className='product-container'>
					<NoteCreate />

				</div>
				<section className="cards" id="cards" style={{ minWidth: "10rem" }}>
					<div className="box-container flex-row-container2 " style={{ minWidth: "130rem", marginLeft: "4rem" }}>

						{notes.map((note) => <NewNote note={note} edit={edit} setEdit={setEdit} />)}


					</div>

					{edit.isEdit && <EditCard edit={edit} setEdit={setEdit} />}
				</section>
			</div>

		</>
	)
}

export default NotesPage
