import React, { Component } from 'react';

export default class Home extends Component {
	render(){
		return(
			<>
				<form onSubmit={this.props.Submit}>
					<input type="text" name="name" onChange={this.props.Fungsi} required/>
					<input type="submit" value="cari" />
				</form>
			</>
		)
	}
}
