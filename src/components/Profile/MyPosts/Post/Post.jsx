import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://bipbap.ru/wp-content/uploads/2017/04/Kartinki-devushek-na-avu-krasivye-krutye-klassnye-novye-2.jpg" />
            {props.message}
            <div>
            <span>like</span> {props.likesCount}
            </div>
        </div>
    );
}
export default Post;
