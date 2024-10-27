import React, { useState } from "react";
import "../style/Note.css"

function Note({note, onDelete, onChange}){
    const [isEditing, setIsEditing] =useState(false);
    const [title, setTitle] = useState(note.title);
    const [content, setContent] = useState(note.content);
    const [completed, setCompleted] = useState(note.completed);
    const formattedDate = new Date(note.created_at).toDateString("en-US")

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
                    <p className="note-title">{note.title}</p>
                    <p className="note-content">{note.content}</p>
                    <p className="note-date">{formattedDate}</p>
                    <p><p>Completed: {note.completed ? "Yes" : "No"}</p></p>
                    <button onClick={handleEdit}>Update</button>
                    <button onClick={() => onDelete(note.id)}>Delete</button>
                </>
            )}
    </div>
}

export default Note