import React from "react";

export default class Search extends React.Component {
	constructor() {
		super();
	}
	handleChange(e) {
		this.props.handleSearch(e.target.value);
	}
	render() {
		return <input className="searchBox" type="text" value={this.props.searchText} onChange={this.handleChange.bind(this)} />;
	}
}