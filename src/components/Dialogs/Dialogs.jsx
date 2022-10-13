import React from 'react'
import { sendMessageCreator } from '../../redux/dialogs-reducer'
import AddMessageForm from './AddMessageForm/AddMessageForm'
import DialogItem from './DialogItem.jsx/DialogItem'
import c from './Dialogs.module.css'
import Message from './Message/Message'

const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs
        .map(d => <DialogItem name={d.name} key={d.id} id={d.id} avatar={d.avatar} />)

    let messagesElements = state.messages
        .map(m => <Message message={m.message} key={m.id} />)

    let newMessageBody = state.newMessageBody

    let addMessage = () => {
        props.dispatch(sendMessageCreator())
    }

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }
    // if (!props.isAuth) return <Navigate to="/login" />

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={c.messages}>
                {messagesElements}

            </div>
            <div>
                <AddMessageForm onSubmit={addNewMessage} />
            </div>

        </div>
    )
}

export default Dialogs