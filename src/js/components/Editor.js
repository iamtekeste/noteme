import React from "react";

export default class NoteItem extends React.Component {
	constructor(){
		super();
	}
	handleChange(e) {
			let newNote = {text: e.target.value}
			if(this.props.selectedNote.id != null ) {
				newNote.id = this.props.selectedNote.id;
				this.props.onChangeMe(newNote);
			}
			else {
				//creating new note
				newNote.id = null;
				this.props.onChangeMe(newNote);
			}
	}
	componentWillMount() {
		this.state = {
			note: {id:null, text:''}
		}
	}
	// componentWillReceiveProps() {
	// 	this.setState({note: this.props.selectedNote }, () => {
	// 		console.log(this.state.note.id);
	// 	});
	// }
	addNewNote() {
		this.props.addNewNote();
	}
	render() {
		return (
			<div className="editor"> 
				<div><button onClick={this.addNewNote.bind(this)}> New Note </button></div>
				<textarea ref="editor"onChange={this.handleChange.bind(this)} value={this.props.selectedNote.text}/>
			</div>
		);
	}
}