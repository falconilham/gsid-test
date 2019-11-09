import React, { Component } from 'react';


class Result extends Component {
	render(){
		const {Data} = this.props
		return(
			<div>
				{(Data || []).map((item, i) => {
					return(
						<div key={i}>
							<h4>{item._id}</h4>
						</div>
					)
				})}
			</div>
		)
	}	
}

export default Result