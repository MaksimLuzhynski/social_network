import React from 'react';
import s from './ProfileInfo.module.css';
 

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://bipbap.ru/wp-content/uploads/2017/09/50dca6763731640fb4fa59a302daf612.jpg" />
            </div>
            <div className={s.descriptionBlock}>
                avatar + description
            </div>
        </div>
    );
}
export default ProfileInfo;
