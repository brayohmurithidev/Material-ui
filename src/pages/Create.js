import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  makeStyles,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  textfield: {
    marginBottom: 15,
    width: 400,
  },
  btn: {
    width: 100,
    textAlign: "center",
    color: "black",
    "&:hover": {
      outline: "blue",
    },
  },
  success:{
    color: 'green'
  }
});

const Create = () => {
  const classes = useStyles();

  // React history hook
  const [title, setTitle] = useState("");
  const [success, setSuccess] = useState('');
  const [post, setPost] = useState("");
  const [category, setCategory] = useState("money");
  const [titleError, setTitleError] = useState(false);
  const [postError, setPostError] = useState(false);

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handlePost = (e) => {
    setPost(e.target.value);
  };
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setPostError(false);

    if (title === "") {
      setTitleError(true);
    }
    if (post === "") {
      setPostError(true);
    }

    if (title && post) {
      fetch("http://localhost:8000/notes", {
        // The http method used
        method: "POST",
        // We set headers that is the type of data sent
        headers: {
          "Content-type": "application/json",
        },
        // The body we post and we convert it to json using stringify
        body: JSON.stringify({ title, post, category }),
      })
        // Redirect to the notes page now.
        .then(() => {
         return(
          setTimeout(()=>(
            setSuccess('Note created successfully'),
            setTitle(""),
            setPost(""),
            setCategory('money')
            )
            , 1000)
         )
          });
    }
  };

  return (
    <div>
      <Typography variant="h6" component="h2" color="primary">
        CREATE NEW POST
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <p className={classes.success}>{success}</p>
        <TextField
          value={title}
          className={classes.textfield}
          onChange={handleTitle}
          label="Title"
          variant="outlined"
          required
          error={titleError}
        ></TextField>{" "}
        <br />
        <TextField
          value={post}
          className={classes.textfield}
          onChange={handlePost}
          label="Post body"
          variant="outlined"
          required
          multiline
          rows={4}
          error={postError}
        ></TextField>{" "}
        <br />
        <FormControl>
          <FormLabel>Notes Category</FormLabel>
          <RadioGroup value={category} onChange={handleCategory}>
            <FormControlLabel control={<Radio />} value="money" label="money" />
            <FormControlLabel control={<Radio />} value="todos" label="Todos" />
            <FormControlLabel
              control={<Radio />}
              value="reminders"
              label="Reminders"
            />
          </RadioGroup>
        </FormControl>{" "}
        <br />
        <Button
          className={classes.btn}
          type="submit"
          variant="outlined"
          color="secondary"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Create;
