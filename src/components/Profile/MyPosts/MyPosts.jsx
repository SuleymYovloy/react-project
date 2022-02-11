import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";
import { updateNewPostTextActionCreator } from "../../../redux/state";
import { addPostActionCreator, updateNewPostText } from "../../../redux/state";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post
      imgUrl="https://cdn-icons-png.flaticon.com/512/147/147144.png"
      message={p.message}
      descr={p.descr}
      likesCount={p.likesCount}
    />
  ));

  let newPostElement = React.useRef();

  let addPost = () => {
    // let text = newPostElement.current.value;
    // let action = { type: "ADD-POST", newText: text };
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
