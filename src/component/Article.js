import React from 'react';

export default function Article(props){
	const {data} = props
	console.log(data)
	return(
		<>
			<div className="article">
				<div className="head-article col-sm-8">
					<h1>{data && data.headline && data.headline.main}</h1>
					<span>{data && data.byline && data.byline.original}</span>
				</div>
				<div className="body-article col-sm-6">
					<span>{data && data.lead_paragraph}</span>
				</div>
				{data && data.keywords.length > 0 ? (
					<h3>related</h3>
				):(
					<h3></h3>
				)}
				<div className="related">
					{(data.keywords || []).map((item, i) => {
						return(
							<div key={i}>
								<button className="btn btn-light">{item.value}</button>
							</div>
						)
					})}
				</div>
				<a href={data && data.web_url}>Click Here For More Detail</a>
			</div>
		</>
	)
}