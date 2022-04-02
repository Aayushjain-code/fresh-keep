import { useState } from "react";
import "./EditCard.css";
import { useNotes } from "../../Context/noteContext";
import { ColorPalette } from "../ColorPalette/ColorPalette"

export const EditCard = ({ edit, setEdit }) => {
	const { isEdit, editItem } = edit;
	const { updateNote } = useNotes();
	const [editCardDetails, setEditCardDetails] = useState({
		_id: editItem._id,
		pinned: editItem.pinned,
		title: editItem.title,
		description: editItem.description,
		tag: editItem.tag,
		priority: editItem.priority,
		selectedBackgroundColor: editItem.selectedBackgroundColor,
	});



	return (

		<div className="modal-edit flex flex-align-center flex-justify-center">
			{console.log("ddd", edit.editItem)}
			<div
				style={{ backgroundColor: editCardDetails.selectedBackgroundColor }}
				className="input-container cont-shadow"
			>
				<div className="input-text-section-container">
					<div className="input-text-section">
						<textarea
							role="textbox"
							type="text"
							placeholder={edit.editItem.title}
							autoFocus
							rows="1"
							className="text title-text-style"
							maxLength="15"
							onChange={(e) => {
								setEditCardDetails({ ...editCardDetails, title: e.target.value });
							}}
							autoFocus
						/>
						<textarea
							rows="5"
							className="text"
							type="text"
							placeholder={edit.editItem.description}
							onChange={(e) => {
								setEditCardDetails({
									...editCardDetails,
									description: e.target.value,
								});
							}}
						/>
					</div>
					<div>

						<span className="pin-icon" onClick={() => {
							setEditCardDetails({
								...editCardDetails,
								pinned: !editCardDetails.pinned,
							})
						}}>
							<i class="fa-solid fa-thumbtack"></i>
						</span>



					</div>
				</div>
				<div className="edit-section-container">
					<div className="edit-section">
						<select
							className="tag"
							onChange={(e) => {
								setEditCardDetails({ ...editCardDetails, tag: e.target.value });
							}}
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
							onChange={(e) => {
								setEditCardDetails({
									...editCardDetails,
									priority: e.target.value,
								});
							}}
						>
							<option value="Priority" hidden>
								Priority
							</option>
							<option value="High">High</option>
							<option value="Medium">Medium</option>
							<option value="Low">Low</option>
						</select>
						<ColorPalette
							inputCardDetails={editCardDetails}
							setInputCardDetails={setEditCardDetails} />
					</div>
					<button
						className='add-btn'
						onClick={() => {
							updateNote(edit.editItem._id, editCardDetails);
							setEdit({ ...edit, isEdit: false });
						}}
					>
						Add
					</button>
				</div>
			</div>
		</div >
	);
};
