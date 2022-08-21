import axios from "../../api";
import {
  GET_TWEETS,
  GET_TWEETS_SUCCESS,
  GET_TWEETS_FAIL,
  LIKE_TWEET,
  // eslint-disable-next-line no-unused-vars
  LIKE_TWEET_SUCCESS,
  LIKE_TWEET_FAIL,
} from "../Constants/tweetConstants";
export const getAllTweets = () => (dispatch) => {
  dispatch({ type: GET_TWEETS });
  axios
    .get("/tweets/")
    .then((res) => dispatch({ type: GET_TWEETS_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: GET_TWEETS_FAIL, payload: err }));
};
export const likeTweet = (id) => (dispatch) => {
  dispatch({ type: LIKE_TWEET });
  axios
    .post(`/tweets/like/${id}`)
    .then((res) => getAllTweets())
    .catch((err) => dispatch({ type: LIKE_TWEET_FAIL }));
};
