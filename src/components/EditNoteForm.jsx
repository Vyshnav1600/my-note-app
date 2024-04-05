import React, { useState } from 'react';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';


const EditNoteForm = ({ note, isVisible, onUpdate, onClose }) => {
    
    const [title, setTitle] = useState(note.title);
    const [content, setContent] = useState(note.content);

    if (!isVisible) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        await onUpdate(note.id, { title, content });
        
        onClose(); 
    };

    return (
        <div className="editNoteForm">
            <form className="edit-Note"  onSubmit={handleSubmit}>
                <label name="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                /><br /><br />
                <label name="content">Content:</label>
                <textarea
                    id="content"
                    name="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                /><br /><br />
                <button class="submit" type="submit"><CloudUploadIcon/></button>
                <button class="close" type="button" onClick={onClose}><CloseRoundedIcon/></button>
            </form>
        </div>
    );
};

export default EditNoteForm;
