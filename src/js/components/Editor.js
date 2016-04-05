import React from "react";
import Util from "./utils";
import ReactDOM from 'react-dom';

export default class NoteItem extends React.Component {
	constructor(){
		super();
		this.state = {currentTime: Util.getTime()}
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
			currentTime: Util.getTime()
		}
	}
	componentWillUpdate() {
		ReactDOM.findDOMNode(this.refs.editor).focus(); 
	}
	componentDidMount() {
		window.setInterval(function () {
		      this.setState({currentTime: Util.getTime()})
	    }.bind(this), 1000);
	}

	addNewNote() {
		this.props.addNewNote();
	}
	render() {
		return (
			<div className="editor"> 
				<div className="toolBar">
						<img src="src/images/pen.svg" onClick={this.addNewNote.bind(this)} />
						{this.state.currentTime}
						<span className="saved">Saved</span>
				</div>
				<textarea ref="editor"onChange={this.handleChange.bind(this)} value={this.props.selectedNote.text}/>
			</div>
		);
	}
}