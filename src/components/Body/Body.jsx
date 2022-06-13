import React from 'react';
import s from './Body.module.css';
import {Navigate, Route, Routes} from "react-router-dom";
import News from "./News/News";
import Music from "./Music/Music";
import Setting from "./Setting/Setting";
import DialogsContainer from "./Dialogs/DialogsContainer";
import UsersContainer from "./Users/UsersContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import Login from "./Login/Login";

const Body = () => {
    return (
        <div className={s.content}>
            <Routes>
                <Route path={'/'} element={<Navigate to="/profile"/>}/>
                <Route path="/profile/:userId" element={<ProfileContainer/>}/>
                <Route path="/dialogs" element={<DialogsContainer/>}/>
                <Route path="/users" element={<UsersContainer/>}/>
                <Route path="/news" element={<News/>}/>
                <Route path="/music" element={<Music/>}/>
                <Route path="/setting" element={<Setting/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </div>
    )
}

export default Body;