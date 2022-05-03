import React, { useState, useEffect } from "react";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:8000/notes")
    .then((res) => res.json())
    .then((data) => setNotes(data));
  },[])

  return (
    <div>
      <h1>Notes page</h1>
      {notes.map((note) => {
        return(
          <div key={note.id}>
             <h3>{note.title}</h3>
             <p>{note.post}</p>
          </div>
        )
      }
      )}
    </div>
  );
};

export default Notes;
