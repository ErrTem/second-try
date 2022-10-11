import React from 'react'
import { Navigate, NavLink } from 'react-router-dom'
import c from './Dialogs.module.css'
import DialogItem from './DialogItem.jsx/DialogItem'
import Message from './Message/Message'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer'
import { Field, reduxForm } from 'redux-form'

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
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>

        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component='textarea' name='newMessageBody' placeholder='enter' />
            <button>написать</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)

export default Dialogs