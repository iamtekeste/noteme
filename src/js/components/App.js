import React from "react";
import PouchDB from "pouchdb";
import Sidebar from "./Sidebar";
import Editor from "./Editor";
PouchDB.plugin(require('pouchdb-upsert'));

let db = new PouchDB("notes");
window.PouchDB = db;
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedNote: {_id:null, text:''}, //open the editor with a blank space
      notes : []
    };
  }
  loadNotesFromDB() {
    db.allDocs({include_docs: true, descending: true}, (err, doc) => {
       var notes = [];
       console.log(doc.rows.length)

       doc.rows.forEach(function(row) {
        notes.push(row.doc);
       });
       this.setState( {
         selectedNote: {_id:null, text:''}, //open the editor with a blank space
         notes : notes
       });
    });
  }
  componentDidMount () {
    // indexedDB.deleteDatabase('_pouch_notes');
    this.loadNotesFromDB();
  }

  //This sets the currently selected note
  handleClick(note) {
    this.setState({selectedNote: note});
  }

  saveToDB(note) {
    
      db.upsert(note._id, function (doc) {
        doc.text = note.text;
        return doc;
      }).then(function (res) {
        console.log(res.updated); 
        // success, res is {rev: '1-xxx', updated: true}
      }).catch(function(err) {console.log(err.message)});
  }

  handleChange(currentNote) {
    let existingNotes = this.state.notes;

    let updatedNotes = [];
    if(currentNote._id == null) {
      var date = new Date();
      currentNote._id = date.toISOString();
      updatedNotes = [currentNote, ...existingNotes];
      this.setState({selectedNote: currentNote, notes:updatedNotes})
    } else {
      //update note
      updatedNotes = existingNotes.forEach(function(note) {
        if(note._id === currentNote._id) {
          note.text = currentNote.text;
          return;
        }
      });
      this.setState({selectedNote: currentNote, notes:existingNotes})
    }

    //save to database
    this.saveToDB(currentNote );

  }

  //this is called when the New Note button is clicked
  addNewNote() {
    var newNote = {_id:null, text: ''}
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
