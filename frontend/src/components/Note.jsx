import React, { useState } from "react";

function Note({note, onDelete, onChange}){
    const [isEditing, setIsEditing] =useState(false);
    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    const formattedDate = new Date(note.created_at).toDateString("en-US")

    const handleEdit = () => {
        setIsEditing(true)
    };

    const saveEdit = () =>{
        onChange(note.id, title, content);
        setIsEditing(false);
    };

    const handleCancelEdit = () =>{
        setIsEditing(false);
        setTitle(note.title);
        setContent(note.content);
    };

    let viewMode = {};
    let editMode = {};
    if (isEditing){
        viewMode.display = 'none';
    } else{
        editMode.display ='none';
    }

    return <div className="note-container">

                <p className="note-title">{note.title}</p>
                <p className="note-content">{note.content}</p>
                <p className="note-date">{formattedDate}</p>
                <button className="update-button" onClick={handleEdit}>
                Update
                </button>
                <button className="delete-button" onClick={() => onDelete(note.id)}>
                Delete
                </button>
    </div>
}

export default Note