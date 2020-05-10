import React from 'react';
import classes from './Post.module.css';


const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src="https://thumbs.dfs.ivi.ru/storage30/contents/2/2/f32c21bd7a7500475c29b494cbbecf.jpg" />
            {props.message}
            <div>
            <span>like</span> {props.likesCount}
            </div>
        </div>
    );
}
export default Post;
