import React, { useState } from 'react';
import Header from './components/Header';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import './App.css';

const App = () => {
    const [notes, setNotes] = useState([]);

    const addNote = (note) => {
        setNotes([...notes, note]);
    };

    const deleteNote = (index) => {
        const newNotes = notes.filter((_, i) => i !== index);
        setNotes(newNotes);
    };

    return (
        <div className="App">
            <Header />
            <NoteForm addNote={addNote} />
            <NoteList notes={notes} deleteNote={deleteNote} />
        </div>
    );
};

export default App;
