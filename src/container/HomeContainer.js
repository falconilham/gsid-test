import React, { Component } from 'react';
import Home from '.././component/Home';
import Result from '.././component/Result';
import {connect} from 'react-redux';
import { api_search } from '.././API';
import { addItem } from '../reducer/Data';
import axios from 'axios';

class HomeContainer extends Component {
	constructor(props){
		super(props)
		this.state = {
			search : "",
			Data: []
		}
		this.getData.bind(this);
		//this.Search.bind(this)
	}

	componentDidMount(){
		this.getData()
	}

	inputHandler = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	getData = async () => {
		//const {data} =this.state
		const { addItem } = this.props
		let search = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key="+api_search;
		let data_handler = [] 
		try{
			await axios.get(search)
			.then((response) => {
				const data_response = response.data.response.docs
				data_response.forEach( doc => {
					data_handler.push(doc)
				})
				addItem(data_handler)
			})
		}catch(error){
			console.log(error)
		}
	}

	Search = (e) => {
		e.preventDefault()
		const {search} = this.state
		const { addItem } = this.props
		let data_handler = []
		let query = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+search+"&api-key="+api_search
		try{
			axios.get(query)
			.then((response) => {
				console.log(response)
				const data_response = response.data.response.docs
				data_response.forEach( doc => {
					data_handler.push(doc)
				})
				addItem(data_handler)
			})
		}catch(error){
			console.log(error)
		}	
	}

	render(){
		const {Data} = this.props
		return(
			<div className="container">
				<Home 
					Fungsi={this.inputHandler.bind(this)}
					Submit={this.Search.bind(this)}
				/>
				<Result 
					Data = {Data}
				/>
			</div>
		)
	}
}


const mapDispatchToProps = (dispatch) => {
  return {
    addItem: Data => {
      dispatch(addItem(Data))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    Data: state.Data.Data
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer)

