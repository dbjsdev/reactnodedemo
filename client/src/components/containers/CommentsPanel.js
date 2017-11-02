import React, { Component} from 'react';
import CommentElement from '../presentation/CommentElement';
import CreateComment from '../presentation/CreateComment';
import { fetchNews } from '../../actions/newsActions'

class CommentsPanel extends Component {

	render(){
		const commentItems = this.props.comments.map( (comment, i) => {
			return ( <li key={i}><CommentElement data = {comment} /></li> );
		});

		return (
			<div>
				<h2>Comments</h2>
				<ul>
					{(this.props.comments.length > 0) ? <ul>{commentItems}</ul> : <div>No comments</div>}
				</ul>
				<CreateComment newsItemID={this.props.id}/>
			</div>
		)
	}
}

export default CommentsPanel