import React from 'react'
import s from './Body.module.css'
import {Navigate, Route, Routes} from 'react-router-dom'
import News from './News/News'
import Music from './Music/Music'
import Setting from './Setting/Setting'
import DialogsContainer from './Dialogs/DialogsContainer'
import UsersContainer from './Users/UsersContainer'
import ProfileContainer, {WithUrlDataContainerComponent} from './Profile/ProfileContainer'
import Login from './Login/Login'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {initializeApp} from '../../redux/appReduser'
import Preload from '../common/Preload/Preload'

class Body extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preload/>
        }
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
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})
const mapDispatchToProps = (dispatch) => ({
    initializeApp: () => {
        dispatch(initializeApp())
    }
})

export default compose(
    WithUrlDataContainerComponent,
    connect(mapStateToProps, mapDispatchToProps))(Body)