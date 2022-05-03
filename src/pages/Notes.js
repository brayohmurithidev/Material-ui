import { Container, Grid } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import NotesCard from "../components/NotesCard";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:8000/notes")
    .then((res) => res.json())
    .then((data) => setNotes(data));
  },[])

  const handleDelete = async (id) =>{
    try {
      await fetch("http://localhost:8000/notes/" + id, {
      method: "DELETE"
    })
    // We filter throug our notes and update our notes
     
    const newNotes = notes.filter(note => note.id !== id);
    setNotes(newNotes);
    } catch (error) {
      console.log({
        message: error.message
      })
    }
    
  }

  return (
    <Container>
      <h1>Notes page</h1>
      <Grid container spacing={3}>
      {notes.map((note) => {
        return(
          <Grid item key={note.id} xs={12} sm={6} md={3}>
           <NotesCard note={note} handleDelete={handleDelete} />
          </Grid>
        )
      }
      )}
      </Grid>
    </Container>
  );
};

export default Notes;
