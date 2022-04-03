import React from 'react'
import "./LabelPage.css"


import { useEffect, useState } from "react";
import { useNotes } from '../../Context/noteContext';
import { useAuth } from '../../Context/authContext';

const LabelPage = () => {


	const { getNotes } = useNotes();
	const { authState } = useAuth();
	const { notes } = authState;

	const tags = ["all", "Home", "Work", "Personal", "Exercise", "Chores", "Health"];


	const [labels, setLabels] = useState({
		all: true,
		Home: false,
		Work: false,
		Personal: false,
		Exercise: false,
		Chores: false,
		Health: false,
	});
	const [filteredNotes, setFilteredNotes] = useState([notes]);

	useEffect(() => {
		getNotes();
	}, []);

	useEffect(() => {
		(function () {
			let newData = [...notes];

			if (labels.all) {
				setFilteredNotes(newData);
			} else {
				const selectedTags = tags.filter((item) => labels[item]);
				newData = newData.filter((item) => selectedTags.includes(item.tag));
				setFilteredNotes(newData);
			}
		})();
	}, [labels]);

	return (
		<>
			<div className="main-container">

				<div className="filter-container-landing">


					<h1 className="filter-heading">Tags</h1>
					<span className="filter-sub-heading">
						<label>
							<input type="checkbox" name="group1"
								onClick={() => {
									setLabels({
										...labels,
										all: !labels.all,
										Home: false,
										Work: false,
										Personal: false,
										Exercise: false,
										Chores: false,
										Health: false,
									});
								}}
							/>
							<span> All</span>
						</label>
						<br />
						<label>
							<input type="checkbox" name="group1"
								onClick={() => {
									setLabels({ ...labels, all: false, Home: !labels.Home });
								}}
							/> <span>Home</span>
						</label>
						<br />
						<label>
							<input type="checkbox" name="group1"
								onClick={() => {
									setLabels({ ...labels, all: false, Work: !labels.Work });
								}}
							/> <span>Work</span>
						</label>
						<br />
						<label>
							<input type="checkbox" name="group1"
								onClick={() => {
									setLabels({
										...labels,
										all: false,
										Personal: !labels.Personal,
									});
								}}
							/> <span>Personal</span>
						</label>
						<br />
						<label>
							<input type="checkbox" name="group1"
								onClick={() => {
									setLabels({
										...labels,
										all: false,
										Exercise: !labels.Exercise,
									});
								}}
							/> <span>Exercise</span>
						</label>
						<br />
						<label>
							<input type="checkbox" name="group1"
								onClick={() => {
									setLabels({
										...labels,
										all: false,
										Chores: !labels.Chores,
									});
								}}
							/> <span>Chores</span>
						</label>
						<br />
						<label>
							<input type="checkbox" name="group1"
								onClick={() => {
									setLabels({
										...labels,
										all: false,
										Health: !labels.Health,
									});
								}}
							/> <span>Health</span>
						</label>
					</span>

				</div>
				<div className='product-container'>
					<section className="cards" id="cards">

						{filteredNotes.length === 0 ? <h1 style={{ marginTop: '15rem', marginLeft: '4rem' }}>No filteredNotes</h1>
							:
							filteredNotes.map((note) => {
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

export default LabelPage
