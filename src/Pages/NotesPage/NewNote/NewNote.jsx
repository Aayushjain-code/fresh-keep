import React from 'react'
import "./NewNote.css"

const NewNote = () => {
	return (
		<div class="m1 card flex-r horizontal-card-container note-cards">
			<i class=" card-close-btn fa-solid fa-thumbtack"></i>
			<div class="card-text-container">
				<h3>Title</h3>
				<p>Description</p>
				<span className='card_tags_container'>
					<h6>Date Created</h6>
					<button className='btn card_tags'>Type</button>
					<button className='btn card_tags'>Priority</button>
				</span>
				<span className='card_icons_container'>
					<i class="card_icons fa-solid fa-pen"></i>
					<i class="card_icons fa-solid fa-box-archive"></i>
					<i class="card_icons fa-solid fa-trash "></i>
				</span>

			</div>
		</div>
	)
}

export default NewNote
