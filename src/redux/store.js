import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux'
import {profileReducer} from './profileReducer'
import {dialogsReducer} from './dialogsReducer'
import {usersReducer} from './usersReducer'
import {authReducer} from './authReduser'
import thunk from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import {appReducer} from './appReduser'

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
})

export let store = createStore(rootReducer, applyMiddleware(thunk))

window.store = store