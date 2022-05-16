import React from 'react';
import s from './Body.module.css';
import {Navigate, Route, Routes} from "react-router-dom";
import Profile from "./Profile/Profile";
import News from "./News/News";
import Music from "./Music/Music";
import Setting from "./Setting/Setting";
import DialogsContainer from "./Dialogs/DialogsContainer";
import Users from "./Users/Users";

const Body = () => {
    return (
        <div className={s.content}>
            <Routes>
                <Route path={'/'} element={<Navigate to="/profile"/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/dialogs" element={<DialogsContainer/>}/>
                <Route path="/users" element={<UsersContainer />}/>
                <Route path="/news" element={<News/>}/>
                <Route path="/music" element={<Music/>}/>
                <Route path="/setting" element={<Setting/>}/>
            </Routes>
        </div>
    )
}

export default Body;