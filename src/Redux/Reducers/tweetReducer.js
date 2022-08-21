import {
  GET_TWEETS,
  GET_TWEETS_SUCCESS,
  GET_TWEETS_FAIL,
  LIKE_TWEET_FAIL,
} from "../Constants/tweetConstants";

const initialState = { tweets: [], loading: false };

const tweetReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TWEETS:
      return { ...state, loading: true };
    case GET_TWEETS_SUCCESS:
      return { ...state, loading: false, tweets: action.payload, error: {} };
    case GET_TWEETS_FAIL:
      return { ...state, loading: false, tweets: [], error: action.payload };
    case LIKE_TWEET_FAIL:
      return { ...state };
    default:
      return { ...state };
  }
};
export default tweetReducer;
