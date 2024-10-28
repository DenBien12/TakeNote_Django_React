import React, { useState } from "react";
import "../style/Note.css"

function Note({note, onDelete, onChange}){
    const [isEditing, setIsEditing] =useState(false);
    const [title, setTitle] = useState(note.title);
    const [content, setContent] = useState(note.content);
    const storedCompleted = localStorage.getItem(`note-${note.id}-completed`);
    const initialCompleted = storedCompleted ? JSON.parse(storedCompleted) : note.completed;
    const [completed, setCompleted] = useState(initialCompleted); 

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        onChange(note.id, title, content);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setTitle(note.title);
        setContent(note.content);
    };

    const handleCheckboxChange = (event) => {
        const newCompleted = event.target.checked;
        setCompleted(newCompleted); 
        localStorage.setItem(`note-${note.id}-completed`, newCompleted); 
    };

    return <div className="note-container">
            {isEditing ? (
                <form onSubmit={handleSave}>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                    <button onClick={handleSave}>Save</button>

                    <button type="button" onClick={handleCancel}>
                        Cancel
                    </button>
                </form>
            ) : (
                <>
                    <input 
                    type="checkbox" 
                    checked={completed} 
                    onChange={handleCheckboxChange} 
                    />
                    <p className="note-title">{note.title}</p>
                    <p className="note-content">{note.content}</p>
                    <button onClick={handleEdit}>Update</button>
                    <button onClick={() => onDelete(note.id)}>Delete</button>

                </>
            )}
    </div>
}

export default Note