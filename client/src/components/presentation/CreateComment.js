import React, { Component} from 'react';
import { submitComment } from '../../actions/newsActions';
import { connect } from 'react-redux';

class CreateComment extends Component {
	
	constructor(){
		super();

		this.state = {
			comment: ''
		};
	}
	
	updateComment(event){
		this.setState({
			comment: event.target.value  
		});
	}

	submitComment(){
		this.props.dispatch(submitComment(this.props.newsItemID, this.props.username, {body: this.state.comment}));	

		this.setState({
			comment: ''
		});		
	}

	render(){
		return (
			<div>
				<h3>Post comment</h3>
				<textarea value={this.state.comment} onChange={this.updateComment.bind(this)} id="body" type="text">

				</textarea><br/>

				<button onClick={this.submitComment.bind(this)}>Post</button>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
    	username: state.auth.username		
	}
}

export default connect(mapStateToProps)(CreateComment);
