import './Note.css';
import React, { useState } from 'react';

// const Note = () => {
//   return (
//     <div className='note'>
//     <h1>Our Note</h1>
//     <p>Here is a showcase of our projects or services and Every details.</p>
//     </div>
//   )
// }




function Note() {
  const [note, setNote] = useState(''); // State for current note input
  const [notes, setNotes] = useState([]); // State for storing all notes

  // Handle the change in the input field
  const handleChange = (event) => {
    setNote(event.target.value);
  };

  // Add a new note
  const addNote = () => {
    if (note.trim()) {
      setNotes([...notes, note]); // Add the new note to the existing list
      setNote(''); // Clear the input field
    }
  };

  // Delete a note by index
  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  return (
    <div className="work-container">
      <h1>My Notes</h1>

      <div className="note-input">
        <input
          type="text"
          value={note}
          onChange={handleChange}
          placeholder="Write a note..."
        />
        <button onClick={addNote}>Add Note</button>
      </div>

      <div className="notes-list">
        {notes.length === 0 && <p>No notes yet!</p>}
        {notes.map((note, index) => (
          <div key={index} className="note-item">
            <p>{note}</p>
            <button onClick={() => deleteNote(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Note;


