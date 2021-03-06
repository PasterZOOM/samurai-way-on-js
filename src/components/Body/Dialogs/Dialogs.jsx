import React from 'react'
import s from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'
import {Field, reduxForm} from 'redux-form'
import {Textarea} from '../../common/FormsControls/FormsControls'
import {maxLengthCreator, required} from '../../../utils/validators/validators'

const maxLength100 = maxLengthCreator(100)

const Dialogs = (props) => {


    let dialogsElement = props.dialogs.map(d => <Dialog key={d.id}
                                                        id={d.id}
                                                        name={d.name}/>)
    let messagesElement = props.messages.map(m => <Message key={m.id}
                                                           message={m.message}/>)


    const addNewMessage = (values) => {
        props.onSendMessageClick(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}


const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       placeholder={'New Message'}
                       name={'newMessageBody'}
                       validate={[required, maxLength100]}/>
            </div>
            <div>
                <button>Send message</button>
            </div>
        </form>
    )
}
const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs