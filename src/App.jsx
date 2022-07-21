import './App.css'
import Navbar from './components/Navbar/Navbar'
import Body from './components/Body/Body'
import HeaderContainer from './components/Header/HeaderContainer'
import {HashRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {store} from './redux/store'
import React from 'react'

const App = () => {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar/>
            <Body/>
        </div>
    )
}

export const SamuraiJSApp = () => {
    return <HashRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>
}