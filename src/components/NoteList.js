import React from 'react';
import NoteItem from './NoteItem';

const NoteList = ({ notes, deleteNote }) => {
    return (
        <div className="note-list">
            {notes.map((note, index) => (
                <NoteItem key={index} note={note} deleteNote={() => deleteNote(index)} />
            ))}
        </div>
    );
};

export default NoteList;
