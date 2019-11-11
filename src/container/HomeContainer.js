import React, { Component } from 'react';
import Home from '.././component/Home';
import Result from '.././component/Result';
import {connect} from 'react-redux';
import { api_KEY, api_MAIN, api_QUERY } from '.././API';
import { addItem } from '../reducer/Data';
import axios from 'axios';

class HomeContainer extends Component {
	constructor(props){
		super(props)
		this.state = {
			search : "",
			Data: [],
			isLoading: false
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

	relatedArticle = async (value, e) => {
		const { addItem } = this.props
		let data_handler = []
		let query = api_QUERY+value+"&api-key="+api_KEY
		try{
			await axios.get(query)
			.then((response) => {
				const data_response = response.data.response.docs
				data_response.forEach( doc => {
					data_handler.push(doc)
				})
				addItem(data_handler)
				this.setState({
					isLoading: false
				})
			})
		}catch(error){
			alert(error)
			this.setState({
				isLoading: false
			})
		}
		
	}

	selectItem = (param, e) => {
		this.props.history.push('/article/'+param)
	}

	getData = async () => {
		const { addItem } = this.props
		let search = api_MAIN+api_KEY;
		let data_handler = []
		this.setState({
			isLoading: true
		}) 
		try{
			await axios.get(search)
			.then((response) => {
				const data_response = response.data.response.docs
				data_response.forEach( doc => {
					if(doc.document_type !== "recipe"){ 
						data_handler.push(doc)
					}
				})
				addItem(data_handler)
				this.setState({
					isLoading: false
				})
			})
		}catch(error){
			alert(error)
			this.setState({
				isLoading: false
			})	
		}
	}

	Search = async (e) => {
		e.preventDefault()
		const {search} = this.state
		const { addItem } = this.props
		let data_handler = []
		let query = api_QUERY+search+"&api-key="+api_KEY
		this.setState({
			isLoading: true
		}) 
		try{
			await axios.get(query)
			.then((response) => {
				const data_response = response.data.response.docs
				data_response.forEach( doc => {
					data_handler.push(doc)
				})
				addItem(data_handler)
				this.setState({
					isLoading: false
				})
			})
		}catch(error){
			alert(error)
			this.setState({
				isLoading: false
			})
		}	
	}

	render(){
		const {Data} = this.props
		const {isLoading} = this.state
		return(
			<div className="container">
				<Home 
					Fungsi={this.inputHandler.bind(this)}
					Submit={this.Search.bind(this)}
				/>
				{isLoading ? (
					<center><h4>Loading ...</h4></center>
				):(
					<Result 
						Data = {Data}
						handler = {this.selectItem.bind(this)}
						related = {this.relatedArticle.bind(this)}
					/>
				)}
				
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

