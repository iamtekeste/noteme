import React from "react";
import NotesList from "./NotesList";
import Search from "./Search";
import {Motion, spring} from 'react-motion';

export default class Sidebar extends React.Component {
    constructor() {
        super();
    }
    deleteHandler(note) {
      this.props.deleteHandler(note);
    }
    handleClick(note) {
    	this.props.onClick(note);
    }
    handleSearch(searchText) {
        this.props.handleSearch(searchText);
    }
    render() {
        return (<aside className="sidebar">
                    <Search handleSearch={this.handleSearch.bind(this)} searchText={this.props.searchText} />
                    <NotesList className="notesList" 
                               searchText={this.props.searchText} 
                               notes={this.props.notes} 
                               onClick={this.handleClick.bind(this)}
                               deleteHandler={this.deleteHandler.bind(this)}
                               selectedNote={this.props.selectedNote} />
               </aside>);
    }
}