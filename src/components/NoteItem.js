import React from 'react';

const NoteItem = ({ note, deleteNote }) => {
    return (
        <div className="note-item">
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <button onClick={deleteNote}>Delete</button>
        </div>
    );
};

export default NoteItem;
