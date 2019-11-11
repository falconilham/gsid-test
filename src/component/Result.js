import React, { Component } from 'react';


class Result extends Component {
	render(){
		const {Data} = this.props
		return(
			<div className="result">
				{(Data || []).map((item, i) => {
					let param = item._id.replace("nyt://article/", "");					
					return(
						<div className="col-sm col-xs item card" key={i}>
							<h4 className="headline">{item.headline.main}</h4>
							<span className="abstract">{item.abstract}</span>
							{item.keywords.length > 0 ? (
								<span>Related</span>
							):(
								<span></span>
							)}
							<div className="related-home">	
								{(item.keywords || []).map((item, i) => {
									return(
										<div key={i}>
											<button className="btn btn-secondary" onClick={this.props.related.bind(this, item.value)}>{item.value}</button>
										</div>
									)
								})}
							</div>
							<button className="btn btn-success handler-page" onClick={this.props.handler.bind(this, param)}>Detail </button>
						</div>
					)
				})}
			</div>
		)
	}	
}

export default Result