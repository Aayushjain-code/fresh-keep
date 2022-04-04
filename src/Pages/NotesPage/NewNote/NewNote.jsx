import { useNotes } from "../../../Context/noteContext";
import "./NewNote.css";

const NewNote = ({ note, edit, setEdit }) => {
  const { archiveNote, deleteNote, updateNote } = useNotes();

  return (
    <div
      className="m1 card flex-r horizontal-card-container note-cards"
      style={{
        backgroundColor: note.selectedBackgroundColor,
        marginBottom: "-8rem",
      }}
      key={note._id}
    >
      {note.pinned ? (
        <span
          onClick={() => {
            setEdit({ ...edit, pinned: !edit.editItem.pinned });
          }}
        >
          <i className=" card-close-btn fa-solid fa-thumbtack"></i>
        </span>
      ) : (
        <span
          onClick={() => {
            setEdit({ ...edit, pinned: !edit.editItem.pinned });
          }}
        >
          <i class=" card-close-btn fa-solid fa-hammer"></i>
        </span>
      )}
      <div className="card-text-container">
        <h3>{note.title}</h3>

        <p>{note.description}</p>
        <span className="card_tags_container">
          <button className="btn card_tags">{note.tag}</button>
          <button className="btn card_tags">{note.priority}</button>
        </span>
        <span className="card_icons_container">
          <i
            className="card_icons fa-solid fa-pen"
            onClick={() => {
              setEdit({
                ...edit,
                isEdit: true,
                editItem: {
                  ...edit.editItem,
                  _id: note._id,
                  pinned: note.pinned,
                  title: note.title,
                  description: note.description,
                  tag: note.tag,
                  priority: note.priority,
                  selectedBackgroundColor: note.selectedBackgroundColor,
                },
              });
            }}
          ></i>
          <i
            className="card_icons fa-solid fa-box-archive"
            onClick={() => {
              archiveNote(note._id, note);
            }}
          ></i>
          <i
            className="card_icons fa-solid fa-trash "
            onClick={() => {
              deleteNote(note._id, note);
            }}
          ></i>
        </span>
      </div>

      <h6 className="dateOnCard">
        Created At:
        {new Date(parseInt(note.createdDate)).toLocaleString(undefined, {
          timeZone: "Asia/Kolkata",
        })}
      </h6>
    </div>
  );
};

export default NewNote;
