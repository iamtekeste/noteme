import React from "react";

export default class NoteItem extends React.Component {
	constructor(){
		super();
	}
	deleteNote() {
		this.props.deleteHandler(this.props.note);
	}
	handleClick() {
		this.props.onClick(this.props.note)
	}
	render() {
			return (<div className="noteItem" 
						
					> 
						<div className="noteTitle" onClick={this.handleClick.bind(this)}>{this.props.note.text}</div>
						<span className="deleteNote" onClick={this.deleteNote.bind(this)}> x </span>
				    </div>
		    )
	}
}