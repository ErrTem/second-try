import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { getUserProfile } from '../../redux/profile-reducer'
import { useParams } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import withAuthRedirect from '../../hoc/withAuthRedirect'
import { compose } from 'redux'
import { withRouter } from '../../API/withRouter'

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId)

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
    profile: state.profilePage.profile,
})

export default compose(
    connect(mapStateToProps, { getUserProfile }),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)