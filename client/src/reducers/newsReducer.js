import constants from '../constants/actionTypes'

var initialState = {
	news: [],
    newsItem: {},
    newsItemLoading: true
}

export default (state = initialState, action) => {

  var updated = Object.assign({}, state);

  switch(action.type) {

    case constants.NEWS_RECEIVED:
      updated['news'] = action.news;
      return updated;

    case constants.NEWSITEM_RECEIVED:
      updated['newsItem'] = action.newsItem;
      updated['newsItemLoading'] = false;
      return updated;

    case constants.NEWSITEM_LOADING:
      updated['newsItemLoading'] = true;
      return updated

    case constants.NEWS_ADDCOMMENT:
		var updatedComments = Object.assign([], updated['newsItem'].comments);
		updatedComments.push({"username": action.username, "body": action.body});
		updated['newsItem'].comments = updatedComments;
		return updated

    default:
      return state;
    }
}