import React from "react";

import Sidebar from "./Sidebar";
import Editor from "./Editor";

export default class App extends React.Component {
  constructor() {
    super();
    var data = [
      {id: 1, text : "Note 1"},
      {id: 2, text : "It was nice"},
      {id: 3, text : "It was horrible"},
      {id: 4, text : "It was sexy"},
      {id: 5, text : "It was awesome"}
    ]; //this will come from the db eventually

    this.state = {
      selectedNote: {id:null, text:''}, //open the editor with a blank space
      notes : data
    };
  }

  handleClick(note) {
    this.setState({selectedNote: note});
  }

  handleChange(currentNote) {
    let existingNotes = this.state.notes;

    let updatedNotes = [];
    if(currentNote.id == null) {
      var date = new Date();
      currentNote.id = date.toISOString();
      updatedNotes = [...existingNotes, currentNote];
      this.setState({selectedNote: currentNote, notes:updatedNotes})
    } else {
      //update note
      updatedNotes = existingNotes.forEach(function(note) {
        if(note.id === currentNote.id) {
          note.text = currentNote.text;
          return;
        }
      });
      this.setState({selectedNote: currentNote, notes:existingNotes})
    }
  }

  addNewNote() {
    var newNote = {id:null, text: ''}
    this.setState({selectedNote: newNote});
  }
  render() {
    return (
      <div>
        <Sidebar onClick={this.handleClick.bind(this)} notes={this.state.notes} />
        <Editor selectedNote={this.state.selectedNote} 
                onChangeMe={this.handleChange.bind(this)}
                addNewNote={this.addNewNote.bind(this)} />
      </div>
    );
  }
}
