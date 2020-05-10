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
            <Post message="Hi, how are you?" likesCount="0"/>
            <Post message="It is my first post."likesCount="23"/>
            <Post />
            <Post />
        </div>
    );
}
export default MyPosts;
