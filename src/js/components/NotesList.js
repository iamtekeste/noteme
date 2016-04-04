import React from "react";
import NoteItem from "./NoteItem";

export default class Sidebar extends React.Component {
    constructor() {
        super();
    }
    deleteHandler(note) {
        this.props.deleteHandler(note)
    }
    handleClick(note) {
    	this.props.onClick(note);
    }
    render() {
        var searchText = this.props.searchText;
    	var notes = this.props.notes.map(note => {
            if(note.text != '' && note.text.indexOf(searchText) !== -1)
                  if(note === this.props.selectedNote)
                       return <NoteItem isActive={true} deleteHandler={this.deleteHandler.bind(this)} onClick={this.handleClick.bind(this)} key={note._id} note={note} />;
                   else
                       return <NoteItem isActive={false} deleteHandler={this.deleteHandler.bind(this)} onClick={this.handleClick.bind(this)} key={note._id} note={note} />;
    	});
        return <div className="notesList">{notes}</div>;
    }
}