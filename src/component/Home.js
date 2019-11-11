import React, { Component } from 'react';

export default function Home(props) {
	return(
		<>
			<form onSubmit={props.Submit} className="form">
				<input type="text" className="form-control" name="search" placeholder="Search Article" onChange={props.Fungsi} required/>
				<input type="submit" className="btn btn-light" value="Search" />
			</form>
		</>
	)
}
