import { combineReducers } from "redux";
import tweetReducer from "./tweetReducer";
import userReducer from "./userReducer";
export default combineReducers({
  user: userReducer,
  tweets: tweetReducer,
});
