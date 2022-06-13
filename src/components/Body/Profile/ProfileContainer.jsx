import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../../redux/profileReducer";
import {useParams} from "react-router-dom";


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
const WithUrlDataContainerComponent = (props) => (
    <ProfileContainer {...props} params={useParams()}/>
)
export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)

