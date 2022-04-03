import React from 'react'
import { useArchive } from '../../Context/archiveContext';
import { useAuth } from '../../Context/authContext';
import "./ArchivePage.css"

const ArchivePage = () => {
	const { authState } = useAuth();
	const { archivedNotes } = authState;

	const { restoreFromArchive, deleteFromArchive } = useArchive();
	return (
		<>

			<div className="main-container">

				{/* <div className="filter-container-landing31"></div> */}

				<div className='product-container3'>
					{
						archivedNotes.length !== 0 && <h1 style={{ marginLeft: "30rem" }}>Archived Items</h1>
					}
					<section className="cards" id="cards">


						{archivedNotes.length === 0 ? <h1 style={{ marginTop: '15rem', marginLeft: '4rem' }}>No Archived</h1>
							:
							archivedNotes.map((note) => {
								return (
									<div className="box-container flex-row-container2" key={note._id}>
										<div className="m1 card flex-r horizontal-card-container note-cards" style={{ backgroundColor: note.selectedBackgroundColor }}>
											<div className="card-text-container">
												<h3>{note.title}</h3>

												<p>{note.description}</p>
												<span className='card_tags_container'>
													<h6>Date Created</h6>
													<button className='btn card_tags'>{note.tag}</button>
													<button className='btn card_tags'>{note.priority}</button>
												</span>
												<span className='card_icons_container'>
													<i className="card_icons fa-solid fa-clock-rotate-left" onClick={() => { restoreFromArchive(note._id) }}></i>

													<i className="card_icons fa-solid fa-trash " onClick={() => { deleteFromArchive(note._id, note) }}></i>
												</span>

											</div>
										</div>
									</div>
								)
							})}

					</section>
				</div>

			</div>
		</>
	)
}

export default ArchivePage
