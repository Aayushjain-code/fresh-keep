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

					{/* <h1 className="filter-heading">Labels</h1>
					<span className="filter-sub-heading">
						<label>
							<input type="checkbox" name="group1"

							/>
							<span> Home</span>
						</label>
						<br />
						<label>
							<input type="checkbox" name="group1"
							/> <span>Work</span>
						</label>
						<br />
						<label>
							<input type="checkbox" name="group1"
							/> <span>Personal</span>
						</label>
						<br />
						<label>
							<input type="checkbox" name="group1"
							/> <span>Health</span>
						</label>
					</span>

					<h1 className="filter-heading">Archived</h1>
 */}




				</div>
				<div className='product-container'>
					<div class="flex-row-container2 ">
						<div class="m1 card flex-r horizontal-card-container noting-card">
							{/* left */}
							<i class="card-close-btn fas fa-times"></i>
							<div class="card-text-container">
								{/* <img src="https://m.media-amazon.com/images/I/51to4LHOOKL._SL1000_.jpg" alt="croton" class="card-img"></img> */}
								<div class="card-btns align-center">
									{/* <button class="btn btn-with-icon"><i class="p1-right fas fa-tag"></i>Label</button>
									<button class="m1 btn btn-primary-outline">Priority</button>
									<button class="m1 btn btn-primary-outline">Choose Color</button> */}
								</div>
							</div>
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
