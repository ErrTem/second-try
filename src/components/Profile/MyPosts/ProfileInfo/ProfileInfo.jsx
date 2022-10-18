import React from 'react'
import Preloader from '../../../common/preloader/preloader'
import c from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'


const ProfileInfo = ({ profile, status, updateStatus }) => {
    if (!profile) {
        return <Preloader />
    }
    return (
        <div>
            <div>
                <img src='https://vsegda-pomnim.com/uploads/posts/2022-02/1645918747_2-vsegda-pomnim-com-p-lednik-foto-2.jpg' />
            </div>
            <div className={c.descriptionBlock}>
                <img src={profile.photos.large} />
                ava+ des
            </div>
            <div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            </div>
        </div>
    )
}

export default ProfileInfo