import React, { Component } from 'react';

class ArticleContainer extends Component {
	constructor(props){
		super(props);
		this.state = {
			id: props.match.params.param
		}
	}
	render(){
		console.log(this)
		return(
			<div>{this.state.id}</div>
		)
	}
}


export default ArticleContainer