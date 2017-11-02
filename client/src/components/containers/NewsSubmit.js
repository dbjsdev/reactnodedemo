import React, { Component} from 'react';
import NewsItemDetail from '../presentation/NewsItemDetail';
import { connect } from 'react-redux';
import { submitNewsStory } from '../../actions/newsActions';
import { withRouter } from "react-router-dom";

class NewsSubmit extends Component {

	constructor(){
		super();

		this.state = {
			submission:{
			}
		};
	}

	componentDidMount(){
		
	}

	updateSubmission(event){
		let updatedSubmission = Object.assign({}, this.state.submission);

		updatedSubmission[event.target.id] = event.target.value;
		this.setState({
			submission: updatedSubmission   
		});
	}

	submitSubmission(){
		this.props.dispatch(submitNewsStory(this.state.submission));	
		this.props.history.push("/");
	}

	render(){

		return (
			<div>
				Title <input onChange={this.updateSubmission.bind(this)} id="title" type="text" placeholder= "Title"/><br/>
				Teaser <input onChange={this.updateSubmission.bind(this)} id="teaser" type="text" placeholder= "Teaser"/><br/>
				Body<br/>
				<textarea onChange={this.updateSubmission.bind(this)} id="body" type="text">

				</textarea><br/>

				<button onClick={this.submitSubmission.bind(this)}>Submit story</button>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
	}
}

export default withRouter(connect(mapStateToProps)(NewsSubmit));







/*
import React, { Component } from 'react'

class CreateOpening extends Component{

  constructor(){
    super()
    this.state = {
      opening:{
      }
    }
  }

  updateOpening(event){
    let updatedOpening = Object.assign({}, this.state.opening)
    updatedOpening[event.target.id] = event.target.value
    this.setState({
      opening: updatedOpening   
    })
  }

  submitOpening(){
    this.props.onCreate(this.state.opening)
  }

  render(){
    return(
      <div>
        <input onChange={this.updateOpening.bind(this)} id="title" type="text" className="form-control" placeholder= "Title"/>
        <input onChange={this.updateOpening.bind(this)} id="description" type="text" className="form-control" placeholder= "Description"/>
        <input onChange={this.updateOpening.bind(this)} id="company" type="text" className="form-control" placeholder= "Company"/>
        <input onChange={this.updateOpening.bind(this)} id="jobUrl" type="text" className="form-control" placeholder= "URL"/>
        <input onChange={this.updateOpening.bind(this)} id="status" type="text" className="form-control" placeholder= "Status"/>
        <button onClick={this.submitOpening.bind(this)} className="btn btn-primary">Create Opening</button>
      </div>
    )
  }
}

export default CreateOpening
*/