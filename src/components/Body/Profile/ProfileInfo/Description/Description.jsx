import React from 'react';
import s from './Description.module.css';
import Preload from "../../../../command/Preload/Preload";


const Description = (props) => {
    if (!props.profile) {
        return <Preload/>
    }
    debugger
    return (
        <div className={s.content}>
            <img src={props.profile.photos.large} alt="avatar"/>
            ava + description
        </div>
    )

}

export default Description;