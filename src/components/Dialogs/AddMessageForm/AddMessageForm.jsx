import { maxLengthCreator, required } from "../../../utils/validators/validators"
import React from "react"
import { Textarea } from "../../common/FormsControls/FormsControls"
import { Field, reduxForm } from "redux-form"

const maxLength50 = maxLengthCreator(50)

let AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={Textarea}
                validate={[required,maxLength50]} name='newMessageBody' placeholder='enter' />
            <button>написать</button>
        </form>
    )
}

export default reduxForm({ form: 'dialog-add-message-form' })(AddMessageForm)
