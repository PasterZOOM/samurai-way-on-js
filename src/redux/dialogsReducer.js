import {v1} from 'uuid'

const SEND_MESSAGE = 'SEND_MESSAGE'

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
}

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {id: v1(), message: action.newMessageBody}
            return {
                ...state,
                messages: [...state.messages, newMessage],
            }
        default:
            return state
    }
}

export const sendNewMessageBodyCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})
