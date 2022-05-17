import React from 'react';
import s from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElement = props.dialogs.map(d => <Dialog key={d.id}
                                                        id={d.id}
                                                        name={d.name}/>)
    let messagesElement = props.messages.map(m => <Message key={m.id}
                                                           message={m.message}/>)
    let newMessageBody = props.newMessageBody


    const onSendMessageClick = () => {
        props.onSendMessageClick()
    }
    const onNewMessageChange = (e) => {
        let body = e.currentTarget.value
        props.onNewMessageChange(body)
    }
    return (<div className={s.dialogs}>
        <div className={s.dialogItems}>
            {dialogsElement}
        </div>
        <div className={s.messages}>
            <div>{messagesElement}</div>
            <div>
                    <textarea value={newMessageBody}
                              onChange={onNewMessageChange}
                              placeholder={'Enter your message'}
                    />
            </div>
            <div>
                <button onClick={onSendMessageClick}>Send message</button>
            </div>
        </div>

    </div>)
}

export default Dialogs;