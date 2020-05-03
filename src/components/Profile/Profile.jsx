import React from 'react';
import classes from './Profile.module.css';


const Profile = () => {
    return (

        <div className={classes.content}>
            <div>
                <img src="https://bipbap.ru/wp-content/uploads/2017/09/50dca6763731640fb4fa59a302daf612.jpg" />
            </div>
            <div>
                avatar + discription
            </div>
            <div>
                My posts
                <div className={classes.posts}> 
                    New post
                </div>
                <div className={classes.item}>
                    post 1
                </div>
                <div className={classes.item}>
                    post 2
                </div>
            </div>
        </div>
    );
}
export default Profile;
