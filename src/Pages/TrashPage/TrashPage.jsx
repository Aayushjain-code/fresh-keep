import React from 'react'
import "./TrashPage.css"

import { useEffect } from "react";
import { useAuth } from "../../Context/authContext";
import { useTrash } from "../../Context/trashContext";

const TrashPage = () => {
	const { authState } = useAuth();
	const { trashedNotes } = authState;

	const { restoreFromTrash, removeFromTrash } = useTrash();
	return (
		<>

			<div className="main-container">
				<div className="filter-container-landing31"></div>

				<div className='product-container3'>
					{
						trashedNotes.length !== 0 && <h1 style={{ marginLeft: "30rem" }}>Trashed Items</h1>
					}

					<section className="cards" id="cards">


						{trashedNotes.length === 0 ? <h1 style={{ marginTop: '15rem', marginLeft: '4rem' }}>No Trashed</h1>
							:
							trashedNotes.map((note) => {
								return (
									<div className="box-container flex-row-container2"
										key={note._id}
									>
										<div className="m1 card flex-r horizontal-card-container note-cards"
											style={{ backgroundColor: note.selectedBackgroundColor }}>
											<div className="card-text-container">
												<h3>{note.title}</h3>

												<p>{note.description}</p>
												<span className='card_tags_container'>
													<h6>Date Created</h6>
													<button className='btn card_tags'>{note.tag}</button>
													<button className='btn card_tags'>{note.priority}</button>
												</span>
												<span className='card_icons_container'>
													<i className="card_icons fa-solid fa-arrow-rotate-left" onClick={() => {
														restoreFromTrash(note);
													}}></i>
													<i className="card_icons fa-solid fa-trash " onClick={() => {
														removeFromTrash(note._id);
													}}></i>
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

export default TrashPage
