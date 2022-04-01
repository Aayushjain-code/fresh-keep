import React from 'react'
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
					<div
						style={{ backgroundColor: 'white' }}
						className="input-container cont-shadow"
					>
						<div className="input-text-section-container">
							<div className="input-text-section">
								<textarea
									role="textbox"
									type="text"
									placeholder="Title"
									autoFocus
									rows="1"
									className="text title-text-style"
									maxLength="15"
								/>
								<textarea
									rows="5"
									className="text"
									type="text"
									placeholder="Take a note..."
								/>
							</div>
							<div>

								<span className="pin-icon">
									<i class="fa-solid fa-thumbtack"></i>
								</span>

							</div>
						</div>
						<div className="edit-section-container">
							<div className="edit-section">
								<select
									className="tag"
								>
									<option value="Label" hidden>
										Label
									</option>
									<option value="Home">Home</option>
									<option value="Work">Work</option>
									<option value="Personal">Personal</option>
									<option value="Exercise">Exercise</option>
									<option value="Chores">Chores</option>
									<option value="Health">Health</option>
								</select>
								<select
									className="tag"
								>
									<option value="Priority" hidden>
										Priority
									</option>
									<option value="High">High</option>
									<option value="Medium">Medium</option>
									<option value="Low">Low</option>
								</select>
							</div>
							<button
								className='add-btn'
							>
								Add
							</button>
						</div>
					</div>
					<section className="cards" id="cards">
						<div className="box-container flex-row-container2">


							<div class="m1 card flex-r horizontal-card-container note-cards">
								{/* left */}
								<i class="card-close-btn fas fa-times"></i>
								<div class="card-text-container">
									{/* image */}
									{/* <div class="card-btns align-center">
										<button class="btn btn-with-icon"><i class="p1-right fas fa-tag"></i>Label</button>
										<button class="m1 btn btn-primary-outline">Priority</button>
									</div> */}
								</div>
							</div>
							<div class="m1 card flex-r horizontal-card-container note-cards">
								{/* left */}
								<i class="card-close-btn fas fa-times"></i>
								<div class="card-text-container">
									{/* image */}
									{/* <div class="card-btns align-center">
										<button class="btn btn-with-icon"><i class="p1-right fas fa-tag"></i>Label</button>
										<button class="m1 btn btn-primary-outline">Priority</button>
									</div> */}
								</div>
							</div>
							<div class="m1 card flex-r horizontal-card-container note-cards">
								{/* left */}
								<i class="card-close-btn fas fa-times"></i>
								<div class="card-text-container">
									{/* image */}
									{/* <div class="card-btns align-center">
										<button class="btn btn-with-icon"><i class="p1-right fas fa-tag"></i>Label</button>
										<button class="m1 btn btn-primary-outline">Priority</button>
									</div> */}
								</div>
							</div>
							<div class="m1 card flex-r horizontal-card-container note-cards">
								{/* left */}
								<i class="card-close-btn fas fa-times"></i>
								<div class="card-text-container">
									{/* image */}
									{/* <div class="card-btns align-center">
										<button class="btn btn-with-icon"><i class="p1-right fas fa-tag"></i>Label</button>
										<button class="m1 btn btn-primary-outline">Priority</button>
									</div> */}
								</div>
							</div>
							<div class="m1 card flex-r horizontal-card-container note-cards">
								{/* left */}
								<i class="card-close-btn fas fa-times"></i>
								<div class="card-text-container">
									{/* image */}
									{/* <div class="card-btns align-center">
										<button class="btn btn-with-icon"><i class="p1-right fas fa-tag"></i>Label</button>
										<button class="m1 btn btn-primary-outline">Priority</button>
									</div> */}
								</div>
							</div>
							<div class="m1 card flex-r horizontal-card-container note-cards">
								{/* left */}
								<i class="card-close-btn fas fa-times"></i>
								<div class="card-text-container">
									{/* image */}
									{/* <div class="card-btns align-center">
										<button class="btn btn-with-icon"><i class="p1-right fas fa-tag"></i>Label</button>
										<button class="m1 btn btn-primary-outline">Priority</button>
									</div> */}
								</div>
							</div>
							<div class="m1 card flex-r horizontal-card-container note-cards">
								{/* left */}
								<i class="card-close-btn fas fa-times"></i>
								<div class="card-text-container">
									{/* image */}
									{/* <div class="card-btns align-center">
										<button class="btn btn-with-icon"><i class="p1-right fas fa-tag"></i>Label</button>
										<button class="m1 btn btn-primary-outline">Priority</button>
									</div> */}
								</div>
							</div>





						</div>


					</section>
				</div>
			</div>

		</>
	)
}

export default NotesPage
