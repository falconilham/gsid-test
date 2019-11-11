import React, { Component } from 'react';
import { connect } from 'react-redux';
import { api_KEY, api_MAIN, api_FILTER } from '.././API';
import axios from 'axios';
import Article from '.././component/Article';

class ArticleContainer extends Component {
	constructor(props){
		super(props);
		this.state = {
			data: ""
		}
		this.filterSearch.bind(this)
	}

	componentDidMount(){
		this.filterSearch()
	}

	filterSearch = async () => {
		const {Data} = this.props
		const {param} = this.props.match.params
		let search_query = '('+'"'+"nyt://article/"+param+'"'+')'
		let query = api_FILTER+search_query+"&api-key="+api_KEY
		try{
			await axios.get(query)
			.then((response) => {
				this.setState({
					data : response.data.response.docs[0]
				})
			})
		}catch(error){
			console.log(error)
		}
		
	}

	render(){
		return(
			<Article 
				data={this.state.data}
			/>
		)
	}
}


const mapStateToProps = (state) => {
  return {
    Data: state.Data.Data
  }
}

export default connect(
  mapStateToProps
)(ArticleContainer)