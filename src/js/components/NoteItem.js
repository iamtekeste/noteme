import React from "react";
const remote = window.require('electron').remote;
export default class NoteItem extends React.Component {
	constructor(){
		super();
	}
	handleContext() {
		const Menu = remote.Menu;
		const MenuItem = remote.MenuItem;

		var menu = new Menu();
		menu.append(new MenuItem({ label: 'Delete', click: function() { console.log('item 1 clicked'); } }));
		menu.popup(remote.getCurrentWindow());
	}
	handleClick() {
		this.props.onClick(this.props.note);
		this.handleContext();
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