import { useEffect, useState } from 'react'
import NewNote from './NewNote/NewNote'
import NoteCreate from './NoteCreate/NoteCreate'
import "./NotesPage.css"


import { useAuth } from "../../Context/authContext";
import { useNotes } from "../../Context/noteContext";

const NotesPage = () => {

	const { authState } = useAuth();
	const { notes } = authState;
	const { getNotes, addNote } = useNotes();


	return (
		<>
			<div className="main-container">

				<div className="filter-container">
					<h1 className="filter-heading">Notes</h1>
					<span className="filter-sub-heading">
						<label style={{ fontSize: '1.8rem' }}>Priority Sorting: </label>
						<br />
						<label>
							<input type="radio" name="group1"

							/> <span>high</span>
						</label>
						<br />
						<label>
							<input type="radio" name="group1"

							/> <span>Medium</span>
						</label>
						<br />
						<label>
							<input type="radio" name="group1"
							/> <span>low</span>
						</label>
					</span>
				</div>

				<div className='product-container'>
					<NoteCreate />
					<section className="cards" id="cards">
						<div className="box-container flex-row-container2">
							{notes.map((note) => <NewNote note={note} />)}


						</div>


					</section>
				</div>
			</div>

		</>
	)
}

export default NotesPage
