import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  //Array that holds all our Notes, initialy its empty
  const [notes, setNotes] = useState([]);

  // Funtion to add Notes
  function addNote(newNote) {
    setNotes((prevNotes) => {
      //Spread the prevoius notes, and add the new note to the end, and return it to setNotes
      return [...prevNotes, newNote];
    });
  }

  //Function to delete note, when delete butn from note componenets gets trigerred
  function deleteNote(id) {
    console.log("deleted");
    setNotes((prevNotes) => {
      // Loop through all the prevNotes
      //filter takes 3 arguments , value(vlaue curently looping thorough), index(index of current looping thro8gh item)
      //retruning an array when filtering
      return prevNotes.filter((noteItem, index) => {
        //Returning the index where its not equal to id, that we get the undeleted notes id
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {/* Mapping through the notes array and createing a note */}
      {/* noteitem referes to each note there is, index is the index of thatr note, check docs for map parameters  */}
      {notes.map((noteItems, index) => {
        return (
          <Note
            key={index}
            // we pass teh index of note as an id and key
            id={index}
            title={noteItems.title}
            content={noteItems.content}
            onDelete={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
