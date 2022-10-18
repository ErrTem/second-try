import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import withAuthRedirect from '../../hoc/withAuthRedirect'
import { withRouter } from '../../hoc/withRouter'
import { getUserProfile, getStatus, updateStatus } from '../../redux/profile-reducer'
import Profile from './Profile'

class ProfileContainer extends React.Component {


    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextProps != this.props || nextState != this.state //PureComponent
    // }
    
    componentDidMount() {

        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <Profile 
            {...this.props} 
            status={this.props.status} 
            updateStatus={this.props.updateStatus}

            />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose(connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
    withRouter,

)(ProfileContainer)

//    withAuthRedirect