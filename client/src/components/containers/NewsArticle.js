import React, { Component} from 'react';
import NewsItemDetail from '../presentation/NewsItemDetail';
import CommentsPanel from './CommentsPanel';
import { connect } from 'react-redux'
import { fetchNewsItem } from '../../actions/newsActions'

class NewsArticle extends Component {


	componentDidMount(){
		this.props.dispatch(fetchNewsItem(this.props.match.params.id));
	}

	render(){

		return (
			<div>
				<h2>News Story</h2>
				<ul>
					{ !this.props.newsItemLoading ? <div><NewsItemDetail data={this.props.newsItem} /> <CommentsPanel comments={this.props.comments} id={this.props.newsItem._id} /></div> : <div>Loading</div>}
				</ul>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
    	newsItem: state.news.newsItem,
    	comments: state.news.newsItem.comments,
    	newsItemLoading: state.news.newsItemLoading
	}
}

export default connect(mapStateToProps)(NewsArticle)