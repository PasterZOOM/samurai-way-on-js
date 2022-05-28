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
            <h2>{props.profile.fullName}</h2>
            <p>
                <b>About me: </b>
                <span>{props.profile.aboutMe}</span>
            </p>
            <p>
                <b>Looking for a job: </b>
                {props.profile.lookingForAJob ? <span>{props.profile.lookingForAJobDescription}</span> : <span>no</span>}
            </p>
            <div>
                <b>Contacts:</b>
                {props.profile.contacts.facebook && <p><b>FaceBook:</b> {props.profile.contacts.facebook}</p>}
                {props.profile.contacts.website && <p><b>Web-site:</b> {props.profile.contacts.website}</p>}
                {props.profile.contacts.vk && <p><b>Vk:</b> {props.profile.contacts.vk}</p>}
                {props.profile.contacts.twitter && <p><b>Twitter:</b> {props.profile.contacts.twitter}</p>}
                {props.profile.contacts.instagram && <p><b>Instagram:</b> {props.profile.contacts.instagram}</p>}
                {props.profile.contacts.youtube && <p><b>YouTube:</b> {props.profile.contacts.youtube}</p>}
                {props.profile.contacts.github && <p><b>GitHub:</b> {props.profile.contacts.github}</p>}
                {props.profile.contacts.mainLink && <p><b>MainLink:</b> {props.profile.contacts.mainLink}</p>}

            </div>

        </div>
    )

}

export default Description;