import React from 'react'
import s from './Body.module.css'
import {Navigate, Route, Routes} from 'react-router-dom'
import News from './News/News'
import Music from './Music/Music'
import Setting from './Setting/Setting'
import UsersContainer from './Users/UsersContainer'
import {WithUrlDataContainerComponent} from './Profile/ProfileContainer'
import Login from './Login/Login'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {initializeApp} from '../../redux/appReduser'
import Preload from '../common/Preload/Preload'


const ProfileContainer = React.lazy(() => import('./Profile/ProfileContainer'))
const DialogsContainer = React.lazy(() => import('./Dialogs/DialogsContainer'))

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
                <React.Suspense fallback={<Preload/>}>
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
                </React.Suspense>
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