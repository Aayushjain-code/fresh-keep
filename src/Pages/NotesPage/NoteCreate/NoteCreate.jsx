import { useState, useEffect } from 'react'
import { ColorPalette } from '../../../Components/ColorPalette/ColorPalette'
import { useNotes } from '../../../Context/noteContext';
import "./NoteCreate.css"
const NoteCreate = () => {
	const { addNote, getNotes } = useNotes();
	const [inputCardDetails, setInputCardDetails] = useState({
		pinned: false,
		title: "",
		description: "",
		tag: "Tag",
		priority: "Priority",
		selectedBackgroundColor: "#faf8f8",
	})

	return (
		<>
			<div
				style={{ backgroundColor: inputCardDetails.selectedBackgroundColor }}
				className="input-container cont-shadow"
			>
				<div className="input-text-section-container">
					<div className="input-text-section">
						<textarea
							role="textBox"
							type="text"
							placeholder="Title"
							autoFocus
							rows="1"
							className="text title-text-style"
							maxLength="15"
							onChange={(e) => setInputCardDetails({ ...inputCardDetails, title: e.target.value })}
						/>
						<textarea
							rows="5"
							className="text"
							type="text"
							placeholder="Take a note..."
							onChange={(e) => setInputCardDetails({ ...inputCardDetails, description: e.target.value })}
						/>
					</div>
					<div>
						{inputCardDetails.pinned ? (
							<span className="pin-icon" onClick={() =>
								setInputCardDetails({ ...inputCardDetails, pinned: !inputCardDetails.pinned })
							}>
								<i class="fa-solid fa-thumbtack"></i>
							</span>
						) : (
							<span className="pin-icon" onClick={() =>
								setInputCardDetails({ ...inputCardDetails, pinned: !inputCardDetails.pinned })
							}>
								<i class="fa-solid fa-thumbtack"></i>
							</span>
						)}


					</div>
				</div>
				<div className="edit-section-container">
					<div className="edit-section">
						<select
							className="tag"
							onChange={(e) => setInputCardDetails({ ...inputCardDetails, tag: e.target.value })}
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
							onChange={(e) => setInputCardDetails({ ...inputCardDetails, priority: e.target.value })}
						>
							<option value="Priority" hidden>
								Priority
							</option>
							<option value="High">High</option>
							<option value="Medium">Medium</option>
							<option value="Low">Low</option>
						</select>
						<ColorPalette
							setInputCardDetails={setInputCardDetails}
							inputCardDetails={inputCardDetails} />
					</div>
					<button
						className='add-btn'
						onClick={() => {
							addNote({
								...inputCardDetails,
								tag: inputCardDetails.tag === "Tag" ? "Home" : inputCardDetails.tag,
								priority: inputCardDetails.priority === "Priority" ? "Low" : inputCardDetails.priority
							})
							setInputCardDetails({
								pinned: false,
								title: "",
								description: "",
								tag: "Tag",
								priority: "Priority",
								selectedBackgroundColor: "#faf8f8",
							})
						}}
					>
						Add
					</button>
				</div>
			</div>
		</>
	)
}

export default NoteCreate
