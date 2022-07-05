import React from 'react'
import Profile from './Profile'
import {connect} from 'react-redux'
import {getStatus, getUserProfile, updateStatus} from '../../../redux/profileReducer'
import {useParams} from 'react-router-dom'
import {compose} from 'redux'


class ProfileContainer extends React.Component {

    componentDidMount() {
        let {userId} = this.props.params
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push('/profile')
            }
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export const WithUrlDataContainerComponent = (Component) => {
    function ComponentWithParams(props) {
        return <Component {...props} params={useParams()}/>
    }

    return ComponentWithParams
}

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    WithUrlDataContainerComponent)
(ProfileContainer)