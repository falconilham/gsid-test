import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Result extends Component {
	render(){
		const {Data} = this.props
		console.log(Data)
		return(
			<div className="result">
				{(Data || []).map((item, i) => {
					let param = item._id.replace("nyt://article/", "");					
					return(
						<Link className="col-sm col-xs item card" to={`/article/${param}`} key={i}>
							<div>
								<h4 className="headline">{item.headline.main}</h4>
								<span>{item.abstract}</span>
							</div>
						</Link>	
					)
				})}
			</div>
		)
	}	
}

export default Result