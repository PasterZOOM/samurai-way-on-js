import React from 'react'
import Profile from './Profile'
import {connect} from 'react-redux'
import {getUserProfile} from '../../../redux/profileReducer'
import {useParams} from 'react-router-dom'
import {withAuthRedirect} from '../../../hoc/withAuthRedirect'


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


let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})
const WithUrlDataContainerComponent = (props) => (
    <AuthRedirectComponent {...props} params={useParams()}/>
)

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)

