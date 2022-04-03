import React from 'react'
import "./LabelPage.css"

const LabelPage = () => {
	return (
		<>
			<div className="main-container">

				<div className="filter-container-landing">


					<h1 className="filter-heading">Labels</h1>
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

				</div>
				<div className='product-container'>
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


						</div>
					</section>
				</div>
			</div>

		</>
	)
}

export default LabelPage
