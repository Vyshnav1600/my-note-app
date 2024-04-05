import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import { addNotes } from "../apis/notesApi";


function TextArea({refreshNotes}){
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({ title: "",content: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }
  
  const submitNote =  async () => {
      if(note.title?.trim()!==""&&note.content?.trim()!==""){
        await addNotes(note);
        refreshNotes();
        setNote({ title: "", content: "" });

      }
    } 

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Enter new note content..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}


export default TextArea;