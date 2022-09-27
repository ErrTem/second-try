import React from 'react'
import c from './ProfileInfo.module.css'


const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img src='https://vsegda-pomnim.com/uploads/posts/2022-02/1645918747_2-vsegda-pomnim-com-p-lednik-foto-2.jpg' />
            </div>
            <div className={c.descriptionBlock}>
                ava+ des
            </div>
        </div>
    )
}

export default ProfileInfo