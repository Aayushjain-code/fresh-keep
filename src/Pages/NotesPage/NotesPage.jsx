import React from 'react'
import NewNote from './NewNote/NewNote'
import NoteCreate from './NoteCreate/NoteCreate'
import "./NotesPage.css"
const NotesPage = () => {
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
							<NewNote />
							<NewNote />
							<NewNote />

						</div>


					</section>
				</div>
			</div>

		</>
	)
}

export default NotesPage
