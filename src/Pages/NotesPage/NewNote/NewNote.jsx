import React from 'react'
import { useNotes } from '../../../Context/noteContext';
import "./NewNote.css"

const NewNote = ({ note, edit, setEdit }) => {
	const { archiveNote, deleteNote } = useNotes();
	return (
		<div class="m1 card flex-r horizontal-card-container note-cards" style={{ backgroundColor: note.selectedBackgroundColor, marginBottom: '-8rem' }} key={note._id}>
			<i class=" card-close-btn fa-solid fa-thumbtack"></i>
			<div class="card-text-container">
				<h3>{note.title}</h3>

				<p>{note.description}</p>
				<span className='card_tags_container'>
					<h6>Date Created</h6>
					<button className='btn card_tags'>{note.tag}</button>
					<button className='btn card_tags'>{note.priority}</button>
				</span>
				<span className='card_icons_container'>
					<i class="card_icons fa-solid fa-pen" onClick={() => {
						setEdit({
							...edit,
							isEdit: true,
							editItem: {
								...edit.editItem,
								_id: note._id,
								pinned: note.pinned,
								title: note.title,
								description: note.description,
								tag: note.tag,
								priority: note.priority,
								selectedBackgroundColor: note.selectedBackgroundColor,
							},
						});
					}}></i>
					<i class="card_icons fa-solid fa-box-archive" onClick={() => { archiveNote(note._id, note) }}></i>
					<i class="card_icons fa-solid fa-trash " onClick={() => { deleteNote(note._id, note) }}></i>
				</span>

			</div>
		</div>
	)
}

export default NewNote
