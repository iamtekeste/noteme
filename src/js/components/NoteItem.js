import React from "react";

export default class NoteItem extends React.Component {
	constructor(){
		super();
	}
	handleClick() {
		this.props.onClick(this.props.note)
	}
	render() {
		return <div className="noteItem" onClick={this.handleClick.bind(this)}> {this.props.note.text} </div>;
	}
}