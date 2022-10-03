import React from 'react'
import Profile from './Profile'
import axios from 'axios'
import { connect } from 'react-redux'
import { setUserProfile } from '../../redux/profile-reducer'
import { useParams } from 'react-router-dom'

// чё тут происходит

export function withRouter(Children) {
    return (props) => {

        const match = { params: useParams() };
        return <Children {...props} match={match} />
    }
}




class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data)

            })
    }

    // componentDidUpdate(prevProps) {
    //     let userId = this.props.router.params.userId
    //     if (prevProps.router.params.userId !== userId) {
    //       let userId = 2
    //       axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`)
    //         .then(response => {
    //           this.props.setUserProfile(response.data);
    //         });
    //     }
    //   }

    render() {
        return (
            <Profile {...this.props} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { setUserProfile })(WithUrlDataContainerComponent)