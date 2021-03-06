import {v1} from 'uuid'
import {profileAPI} from '../api/api'

const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'

let initialState = {
    posts: [
        {id: v1(), message: 'Its my first post', likes: 32},
        {id: v1(), message: 'Its my second post', likes: 54}],
    profile: null,
    status: ''
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {id: v1(), message: action.newPostText, likes: 0}
            return {
                ...state,
                posts: [newPost, ...state.posts],
                newPostText: ''
            }
        case DELETE_POST:
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status: action.status}
        default:
            return state
    }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const deletePostActionCreator = (postId) => ({type: DELETE_POST, postId})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const getUserProfile = (userId) => async (dispatch) => {
    const response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}
export const getStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}
export const updateStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}