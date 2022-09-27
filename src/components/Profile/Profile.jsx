import React from 'react'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo'
import c from './Profile.module.css'


const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    )
}

export default Profile