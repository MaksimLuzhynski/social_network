import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';



const Profile = () => {
    return (

        <div>
            <div>
                <img src="https://bipbap.ru/wp-content/uploads/2017/09/50dca6763731640fb4fa59a302daf612.jpg" />
            </div>
            <div>
                avatar + discription
            </div>
            <div>
                <MyPosts />
            </div>
        </div>
    );
}
export default Profile;
