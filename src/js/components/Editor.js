import React from "react";
import Util from "./utils";
import ReactDOM from 'react-dom';

export default class NoteItem extends React.Component {
	constructor(){
		super();
	}
	handleChange(e) {
			   let newNote = this.props.selectedNote;
			   newNote.text = e.target.value;
			   if(newNote.text === '')
			   		newNote._deleted = true; 	

			   this.props.onChangeMe(newNote)
	}
	componentWillMount() {
		this.state = {
			note: {_id:null, text:''}
		}
	}
	componentDidMount() {
		ReactDOM.findDOMNode(this.refs.editor).focus(); 
	}

	addNewNote() {
		this.props.addNewNote();
	}
	render() {
		return (
			<div className="editor"> 
				<div className="toolBar">
						<img src="src/images/pen.svg" onClick={this.addNewNote.bind(this)} />
						{Util.getTime()}

				</div>
				<textarea ref="editor"onChange={this.handleChange.bind(this)} value={this.props.selectedNote.text}/>
			</div>
		);
	}
}