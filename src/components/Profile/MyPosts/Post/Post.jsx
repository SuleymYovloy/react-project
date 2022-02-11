import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src={props.imgUrl} alt="Аватар" />
      <h1>{props.message}</h1>
      <p>{props.descr}</p>
      <div>
        <span>Нравится {props.likesCount}</span>
      </div>
      post 1
    </div>
  );
};

export default Post;
