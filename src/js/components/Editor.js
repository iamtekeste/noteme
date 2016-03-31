import React from "react";

export default class NoteItem extends React.Component {
	constructor(){
		super();
	}
	handleChange(e) {
			let newNote = {text: e.target.value}
			if(this.props.selectedNote._id != null ) {
				newNote._id = this.props.selectedNote._id;
				this.props.onChangeMe(newNote);
			}
			else {
				//creating new note
				newNote._id = null;
				this.props.onChangeMe(newNote);
			}
	}
	componentWillMount() {
		this.state = {
			note: {_id:null, text:''}
		}
	}
	// componentWillReceiveProps() {
	// 	this.setState({note: this.props.selectedNote }, () => {
	// 		console.log(this.state.note._id);
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