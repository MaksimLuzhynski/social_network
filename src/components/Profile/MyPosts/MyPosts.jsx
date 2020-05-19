import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

let postData = [
    { id: 1, message: "Hi, how are you?", likesCount: "0" },
    { id: 2, message: "It is my first post.", likesCount: "23"}
]

const MyPosts = () => {
    return (
        <div className={s.myPostsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
   
                <Post message={postData[0].message}  likesCount={postData[0].likesCount}/>
                <Post message={postData[1].message}  likesCount={postData[1].likesCount}/>
                <Post />
                <Post />
            </div>
        </div>
    );
}
export default MyPosts;
