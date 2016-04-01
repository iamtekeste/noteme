import React from "react";

export default class NoteItem extends React.Component {
	constructor(){
		super();
	}
	handleContext() {
		console.log(this.props.note);
	}
	handleClick() {
		this.props.onClick(this.props.note)
	}
	render() {
			return (<div className="noteItem" 
						onClick={this.handleClick.bind(this)}
						onContextMenu={this.handleContext.bind(this)}> 
						{this.props.note.text} 
				    </div>
		    )
	}
}