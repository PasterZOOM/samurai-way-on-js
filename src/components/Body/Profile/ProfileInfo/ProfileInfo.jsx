import React from 'react';
import s from './Profile.module.css';
import HatPage from "./HatPage/HatPage";
import Description from "./Description/Description";


const ProfileInfo = () => {
    return (
        <div className={s.content}>
            <HatPage/>
            <Description/>
        </div>
    )

}

export default ProfileInfo;