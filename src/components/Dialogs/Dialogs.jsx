import React from 'react'
import { NavLink } from 'react-router-dom'
import c from './Dialogs.module.css'
import DialogItem from './DialogItem.jsx/DialogItem'
import Message from './Message/Message'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer'

const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs
        .map(d => <DialogItem name={d.name} key = {d.id} id={d.id} avatar={d.avatar} />)

    let messagesElements = state.messages
        .map(m => <Message message={m.message} key = {m.id}/>)


    let newMessageBody = state.newMessageBody

    let addMessage = () => {
        props.dispatch(sendMessageCreator())
    }

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (e) => {
    
        let body = e.target.value
        props.updateNewMessageBody(body)
    }

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={c.messages}>
                {messagesElements}
                <textarea
                    placeholder='enter'
                    onChange={onNewMessageChange}
                    value={newMessageBody}
                />
                <button onClick={onSendMessageClick}>написать</button>
            </div>

        </div>
    )
}

export default Dialogs