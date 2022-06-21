import {applyMiddleware, combineReducers} from "redux";
import { legacy_createStore as createStore} from 'redux'
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReduser";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from 'redux-form'

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})

export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

window.store = store

export default store