import React, { useState } from "react";
import Note from "./Note";

function CreateArea(props) {
  //OBJECT THAT CONTAINS BOTH TITLE AND content
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  // Function to clear teh note input fields so when added it erases teh content in feild rather than manually deleting it
  function clearInputArea() {
    // set note state to empty title and empty content
    setNote({
      title: "",
      content: "",
    });
  }

  function handleChange(event) {
    //Destructrue event to get the value of event
    const { name, value } = event.target;
    // SAME AS WRITING constname = event.target.value but this is destructureing easier as less code
    setNote((prevNote) => {
      // prevNote is teh current values of note
      //Spread operator spreads current keys and values and add it to final object
      return {
        ...prevNote,
        [name]: value,
      };
    });
    //adding [name] to name gives the actual names instead of a string key
  }

  function submitNote(event) {
    //Passing in the current created note to onAdd function in app.jsx
    props.onAdd(note);
    // Calling function to clear the input feilds
    clearInputArea();
    //Prevent reloading of page,default behavoiour of forms
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          value={note.title}
          placeholder="Title"
        />
        <textareaset
          onChange={handleChange}
          name="content"
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
