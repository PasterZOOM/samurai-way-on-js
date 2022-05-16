import {v1} from "uuid";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [
        /*{
            id: v1(),
            followed: true,
            name: 'Ilya',
            status: 'Hello',
            location: {
                country: 'Belarus',
                city: 'Zaslavl\''
            }
        },
        {
            id: v1(),
            followed: false,
            name: 'Dasha',
            status: 'I am happy',
            location: {
                country: 'Belarus',
                city: 'Zaslavl\''
            }
        },
        {
            id: v1(),
            followed: false,
            name: 'Misha',
            status: 'Yo',
            location: {
                country: 'Belarus',
                city: 'Minsk'
            }
        },
        {
            id: v1(),
            followed: true,
            name: 'Pasha',
            status: 'YoYo',
            location: {
                country: 'Russia',
                city: 'Moscow'
            }
        },*/
    ]
}

export const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id = action.userId ? {...u, followed: true} : u)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id = action.userId ? {...u, followed: false} : u)
            }
        case SET_USERS:
            return {...state, users:[...state.users, ...action.users]}
        default:
            return state
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})