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
        var searchText = this.props.searchText;
    	var notes = this.props.notes.map(note => {
            if(note.text != '' && note.text.indexOf(searchText) !== -1)
    		      return <NoteItem onClick={this.handleClick.bind(this)} key={note._id} note={note} />;
    	});
        return <div className="notesList">{notes}</div>;
    }
}