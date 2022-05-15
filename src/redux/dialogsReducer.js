import {v1} from "uuid";

const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';

let initialState = {
    dialogs: [
        {id: v1(), name: 'Ivan'},
        {id: v1(), name: 'Slava'},
        {id: v1(), name: 'Igor'},
        {id: v1(), name: 'Dasha'},
        {id: v1(), name: 'Yura'}],
    messages: [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'How are you'},
        {id: v1(), message: 'Thanks'}],
    newMessageBody: ''
}

export const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {id: v1(), message: state.newMessageBody}
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageBody: ''
            }
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }
        default:
            return state
    }
}

export const sendNewMessageBodyCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})