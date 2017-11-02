import actionTypes from '../constants/actionTypes';

function newsItemReceived(newsItem){
	return {
		type: actionTypes.NEWSITEM_RECEIVED,
		newsItem: newsItem
	}
}

function newsReceived(news){
	return {
		type: actionTypes.NEWS_RECEIVED,
		news: news
	}
}

function newsItemLoading(){
	return {
		type: actionTypes.NEWSITEM_LOADING
	}
}

function addComment(username, body){
	return {
		type: actionTypes.NEWS_ADDCOMMENT,
		username: username,
		body: body
	}
}


export function fetchNews(){
	return dispatch => {
		console.log();

		return fetch(`/news`)
		.then( (response) => response.json() )
		.then( (data) => dispatch(newsReceived(data.data)))
		.catch( (e) => console.log(e) );
	}	
}

export function fetchNewsItem(id){
	return dispatch => {
		dispatch(newsItemLoading());

		return fetch(`/news/${id}`)
		.then( (response) => response.json() )
		.then( (data) => dispatch(newsItemReceived(data.data)))
		.catch( (e) => console.log(e) );
	}	
}

export function submitNewsStory(data){
	return dispatch => {
		return fetch('/news/', { 
			method: 'POST', 
 			headers: {
    			'Accept': 'application/json',
    			'Content-Type': 'application/json'
  			},
			body: JSON.stringify(data), 
			mode: 'cors'})
			.catch( (e) => console.log(e) );
	}	
}

export function submitComment(newsItemID, username, data){
	var token = localStorage.getItem('token') || null;

	return dispatch => {
		return fetch(`/news/${newsItemID}/comment`, { 
			method: 'POST', 
 			headers: {
    			'Accept': 'application/json',
    			'Content-Type': 'application/json',
    			'Authorization' : `Bearer ${token}`
  			},
			body: JSON.stringify(data), 
			mode: 'cors'})
			.then( (response) => {
		        if (!response.ok) {
		            throw Error(response.statusText);
		        }else{

		        	dispatch(addComment(username, data.body))
		        }
		    })
			.catch( (e) => console.log(e) );
	}	
}

