import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
    return (
        <div>
            My posts
            <div className={classes.posts}>
                New post
            </div>
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
}
export default MyPosts;
