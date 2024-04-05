import React, { useState }from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit"; 
import { deleteNotes } from "../apis/notesApi";
import { EditNotes } from "../apis/notesApi";
import EditNoteForm from './EditNoteForm';

function Note(props) {

  const [isEditFormVisible, setEditFormVisible] = useState(false);

  const handleClick =async () => {
    await deleteNotes(props);
    props.refreshNotes();
  }

  const handleEditClick = () => {
    setEditFormVisible(true);
  };

  const handleCloseEditForm = () => {
    setEditFormVisible(false);
  };

  const handleUpdateNote = async (id, updatedNote) => {
    
    console.log("Update note", id, updatedNote);
          await EditNotes(id,updatedNote);
          props.refreshNotes();
    handleCloseEditForm();
  };

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button class="btn btn-delete" onClick={handleClick}>
        <DeleteIcon />
      </button>
      <button class="btn btn-edit" onClick={handleEditClick}>
        <EditIcon /> 
      </button>
      <EditNoteForm
        note={props}
        isVisible={isEditFormVisible}
        onUpdate={handleUpdateNote}
        onClose={handleCloseEditForm}
      />   
       </div>
  );
}

export default Note;

