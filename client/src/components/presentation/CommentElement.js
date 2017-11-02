import React, { Component} from 'react';
import PropTypes from 'prop-types';

class CommentElement extends Component {
	render(){
		return (
			<div>
				<div><b>{this.props.data.username}</b></div>
				<div>{this.props.data.body}</div>
			</div>
		)
	}
}


CommentElement.propTypes = {
    data: PropTypes.shape({
		username: PropTypes.string.isRequired,
		body: PropTypes.string.isRequired
    })
};

export default CommentElement