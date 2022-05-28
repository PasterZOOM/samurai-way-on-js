import React from 'react';
import s from './Users.module.css'
import axios from "axios";
import userPhoto from './img/userPhoto.png'

class Users extends React.Component {

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
        let pages = []
        if (this.props.currentPage<=3) {
            for (let i = 1; i <= 7; i++) {
                pages.push(i)
            }
        } else {
            for (let i = (this.props.currentPage-3); i <= (this.props.currentPage+3); i++) {
                pages.push(i)
            }
        }
        return (
            <div>
                {pages.map(p =>
                    <span className={this.props.currentPage === p && s.selectedPage}
                          onClick={() => this.onPageChanged(p)}>
                        {p}
                    </span>
                )}
                {this.props.users.map(u => <div key={u.id}>
                    <span>
                            <img src={u.photos.small !== null ? u.photos.small : userPhoto}
                                 className={s.userPhoto}
                                 alt={'avatar'}/>
                        <div>
                            {u.followed
                                ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                                : <button onClick={() => this.props.follow(u.id)}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
                </div>)
                }
            </div>
        )
    }
}

export default Users;