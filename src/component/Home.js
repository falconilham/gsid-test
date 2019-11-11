import React, { Component } from 'react';

export default class Home extends Component {
	render(){
		return(
			<>
				<form onSubmit={this.props.Submit} className="form">
					<input type="text" className="form-control" name="search" placeholder="Search Article" onChange={this.props.Fungsi} required/>
					<input type="submit" className="btn btn-light" value="cari" />
				</form>
			</>
		)
	}
}
