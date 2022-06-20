import React from 'react'
import s from './Profile.module.css'
import Description from './Description/Description'


const ProfileInfo = (props) => {
    return (
        <div className={s.content}>
            {/*<HatPage/>*/}
            <Description profile={props.profile}/>
        </div>
    )

}

export default ProfileInfo