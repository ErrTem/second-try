import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import withAuthRedirect from '../../hoc/withAuthRedirect'
import { withRouter } from '../../hoc/withRouter'
import { getUserProfile, getStatus, updateStatus } from '../../redux/profile-reducer'
import Profile from './Profile'

class ProfileContainer extends React.Component {

    componentDidMount() {

        // let userId = this.props.match  почему есть match  и к нему обращаемся?
        let userId = this.props.match.params.userId

        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose(connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)