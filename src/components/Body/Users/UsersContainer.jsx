import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, unfollowAC} from "../../../redux/usersReducer";
import React from "react";
import axios from "axios";

class UsersContainer extends React.Component {

    componentDidMount() {
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      users={this.props.users}
                      onPageChanged={this.onPageChanged}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
        />
    }
}

const mapStateToProps = (state) => {
    return (
        {
            users: state.usersPage.users,
            pageSize: state.usersPage.pageSize,
            totalUsersCount: state.usersPage.totalUsersCount,
            currentPage: state.usersPage.currentPage
        }
    )
}
const mapDispatchToProps = (dispatch) => {
    return (
        {
            follow: (userId) => {
                dispatch(followAC(userId))
            },
            unfollow: (userId) => {
                dispatch(unfollowAC(userId))
            },
            setUsers: (users) => {
                dispatch(setUsersAC(users))
            },
            setCurrentPage: (pageNumber) => {
                dispatch(setCurrentPageAC(pageNumber))
            },
            setTotalUsersCount: (totalCount) => {
                dispatch(setUsersTotalCountAC(totalCount))
            }
        }
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)