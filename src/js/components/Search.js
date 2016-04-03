import React from "react";

export default class Search extends React.Component {
	constructor() {
		super();
	}
	handleChange(e) {
		this.props.handleSearch(e.target.value);
	}
	render() {
		return ( <div className="searchBox"> 
					<img src="src/images/search.svg" />
					<input type="text" placeholder="Search" value={this.props.searchText} onChange={this.handleChange.bind(this)} />
				 </div>
		);
	}
}