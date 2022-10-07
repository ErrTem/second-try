import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import withAuthRedirect from '../../hoc/withAuthRedirect'
import { withRouter } from '../../hoc/withRouter'
import { getUserProfile } from '../../redux/profile-reducer'
import Profile from './Profile'

class ProfileContainer extends React.Component {

    componentDidMount() {
        debugger
        let userId = this.props.match.params.userId

        debugger
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId)
    }

    render() {
        return (
            <Profile {...this.props} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

export default compose(connect(mapStateToProps, { getUserProfile }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)