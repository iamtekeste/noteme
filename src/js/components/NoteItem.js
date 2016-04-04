import React from "react";
const remote = window.require('electron').remote;
export default class NoteItem extends React.Component {
	constructor(){
		super();
		this.state = {active: false};
	}
	deleteNote() {
		this.props.deleteHandler(this.props.note);
	}
	handleClick() {
		this.props.onClick(this.props.note);
	}
	render() {
			let noteItemClass = 'noteItem';
			if (this.props.isActive) {noteItemClass += ' selected'}
			return (<div className={noteItemClass}> 
						<div className="noteTitle" onClick={this.handleClick.bind(this)}>{this.props.note.text}</div>
						<span className="deleteNote" onClick={this.deleteNote.bind(this)}> x </span>
				    </div>
		    )
	}
}