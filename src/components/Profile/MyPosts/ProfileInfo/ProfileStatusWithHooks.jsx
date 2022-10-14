import React from 'react'
import { useState } from 'react'

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
       this.props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.urrentTarget.value)
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || 'no status'}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}
                        value={status} />
                </div>
            }
        </div>

    )
}

export default ProfileStatusWithHooks 