import { useEffect, useState } from 'react'
import NewNote from './NewNote/NewNote'
import NoteCreate from './NoteCreate/NoteCreate'
import "./NotesPage.css"


import { useAuth } from "../../Context/authContext";
import { useNotes } from "../../Context/noteContext";
import { EditCard } from '../../Components/EditCard/EditCard';

const NotesPage = () => {

	const { authState } = useAuth();
	const { notes } = authState;
	const { getNotes, addNote } = useNotes();


	const order = { Low: 1, Medium: 2, High: 3 };

	const [labels, setLabels] = useState({

		LowToHigh: false,
		HighToLow: false,
	});
	const [filteredNotes, setFilteredNotes] = useState([notes]);

	useEffect(() => {
		getNotes();
	}, []);

	useEffect(() => {
		(function () {
			let newData = [...notes];
			if (labels.LowToHigh) {
				newData.sort((a, b) => order[a.priority] - order[b.priority]);
			}
			if (labels.HighToLow) {
				newData.sort((a, b) => order[b.priority] - order[a.priority]);
			}
			setFilteredNotes(newData);
		})();
	}, [notes, labels]);

	const [edit, setEdit] = useState({
		isEdit: false,
		editItem: {
			_id: null,
			pinned: false,
			title: "",
			description: "",
			tag: "Tag",
			priority: "Priority",
			selectedBackgroundColor: "#faf8f8",
		}
	});

	return (
		<>
			<div className="main-container">
				{console.log("filteredNotes", filteredNotes)}
				<div className="filter-container">
					<span className="filter-sub-heading">
						<label style={{ fontSize: '1.8rem' }}>Priority Sorting: </label>
						<br />
						<label>
							<input type="radio" name="group1"
								onClick={() =>
									setLabels({ ...labels, HighToLow: true, LowToHigh: false })
								}
							/> <span>High to Low</span>
						</label>

						<br />
						<label>
							<input type="radio" name="group1"
								onClick={() =>
									setLabels({ ...labels, HighToLow: false, LowToHigh: true })
								}
							/> <span>Low to High</span>
						</label>
					</span>
					<span className="filter-sub-heading">
						<label style={{ fontSize: '1.8rem' }}>Sort By Date: </label>
						<br />
						<label>
							<input type="radio" name="group1"

							/> <span>Oldest</span>
						</label>
						<br />
						<label>
							<input type="radio" name="group1"

							/> <span>Newest</span>
						</label>

					</span>
				</div>

				<div className='product-container'>
					<NoteCreate />

				</div>
				<section className="cards" id="cards" style={{ minWidth: "10rem" }}>
					<div className="box-container flex-row-container2 " style={{ minWidth: "130rem", marginLeft: "4rem" }}>

						{filteredNotes.map((note) => <NewNote note={note} edit={edit} setEdit={setEdit} />)}


					</div>

					{edit.isEdit && <EditCard edit={edit} setEdit={setEdit} />}
				</section>
			</div>

		</>
	)
}

export default NotesPage
