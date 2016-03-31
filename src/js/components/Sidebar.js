import React from "react";
import NoteItem from "./NoteItem";

export default class Sidebar extends React.Component {
    constructor() {
        super();
    }
    handleClick(note) {
    	this.props.onClick(note);
    }
    render() {
    	var notes = this.props.notes.map(note => {
            if(note.text != '')
    		      return <NoteItem onClick={this.handleClick.bind(this)} key={note._id} note={note} />;
    	});
        return <aside className="notesList">{notes}</aside>;
    }
}