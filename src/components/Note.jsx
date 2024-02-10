import React from "react";

function Note(props) {
  function handleClick() {
    // Caling delete fucntion in app usign props and passing the index using props.id to delete
    props.onDelete(props.id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;
