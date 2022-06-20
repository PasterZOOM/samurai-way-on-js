import React from 'react'
import Profile from './Profile'
import {connect} from 'react-redux'
import {getUserProfile} from '../../../redux/profileReducer'
import {useParams} from 'react-router-dom'
import {compose} from 'redux'


class ProfileContainer extends React.Component {

    componentDidMount() {
        let {userId} = this.props.params
        this.props.getUserProfile(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

const WithUrlDataContainerComponent = (Component) => {
    function ComponentWithParams(props) {
        return <Component {...props} params={useParams()}/>
    }

    return ComponentWithParams
}

export default compose(
    connect(mapStateToProps, {getUserProfile}),
    WithUrlDataContainerComponent)
(ProfileContainer)