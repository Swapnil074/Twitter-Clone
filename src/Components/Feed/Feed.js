import React, { useEffect } from "react";
import TweetBox from "../TweetBox";
import Post from "../Post";
import "./Feed.css";
// import db from "./firebase";
import FlipMove from "react-flip-move";
import { getAllTweets } from "../../Redux/Actions/tweetActions";
import { connect } from "react-redux";

function Feed(props) {
  useEffect(() => {
    props.getAllTweets();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />

      <FlipMove>
        {props.tweets.tweets?.map((post) => (
          <Post
            key={post.text}
            displayName={post.name}
            username={post.name.split(" ").join("").toLowerCase()}
            verified={true}
            text={post.text}
            image={post.image}
            likes={post.likes}
            id={post._id}
          />
        ))}
      </FlipMove>
    </div>
  );
}
const mapStateToProps = (state) => ({ tweets: state.tweets });
export default connect(mapStateToProps, { getAllTweets })(Feed);
