import { Container, Grid, Paper } from "@material-ui/core";
import React, { useState, useEffect } from "react";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:8000/notes")
    .then((res) => res.json())
    .then((data) => setNotes(data));
  },[])

  return (
    <Container>
      <h1>Notes page</h1>
      <Grid container>
      {notes.map((note) => {
        return(
          <Grid key={note.id} xs={12} sm={6} md={3}>
            <Paper>
            <h3>{note.title}</h3>
             <p>{note.post}</p>
            </Paper>
          </Grid>
        )
      }
      )}
      </Grid>
    </Container>
  );
};

export default Notes;
