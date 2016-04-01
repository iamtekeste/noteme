import React from "react";
import NotesList from "./NotesList";
import Search from "./Search";
export default class Sidebar extends React.Component {
    constructor() {
        super();
    }
    handleClick(note) {
    	this.props.onClick(note);
    }
    handleSearch(searchText) {
        this.props.handleSearch(searchText);
    }
    render() {
        return <aside className="sidebar">
                    <Search handleSearch={this.handleSearch.bind(this)} searchText={this.props.searchText} />
                    <NotesList className="notesList" 
                               searchText={this.props.searchText} 
                               notes={this.props.notes} 
                               onClick={this.handleClick.bind(this)} />
               </aside>;
    }
}