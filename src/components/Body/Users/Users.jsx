import React from 'react';
import s from './Users.module.css'
import userPhoto from '../../../assets/images/userPhoto.png'
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../../api/api";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    if (props.currentPage <= 3) {
        for (let i = 1; i <= 7; i++) {
            pages.push(i)
        }
    } else if (props.currentPage + 3 >= pagesCount) {
        for (let i = (props.currentPage - 3); i <= pagesCount; i++) {
            pages.push(i)
        }
    } else {
        for (let i = (props.currentPage - 3); i <= (props.currentPage + 3); i++) {
            pages.push(i)
        }
    }

    return (
        <div>
            {pages.map(p =>
                <span className={props.currentPage === p && s.selectedPage}
                      onClick={() => props.onPageChanged(p)}>
                        {p}
                    </span>
            )}
            {props.users.map(u => <div key={u.id}>
                    <span>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small !== null ? u.photos.small : userPhoto}
                                 className={s.userPhoto}
                                 alt={'avatar'}/>
                        </NavLink>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.toggleFollowingProgress(true, u.id)
                                    usersAPI.unfollow(u.id)
                                        .then(data => {
                                            if (data.resultCode === 0) {
                                                props.unfollow(u.id)
                                            }
                                            props.toggleFollowingProgress(false, u.id)
                                        })

                                }}>Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.toggleFollowingProgress(true, u.id)
                                    usersAPI.follow(u.id)
                                        .then(data => {
                                            if (data.resultCode === 0) {
                                                props.follow(u.id)
                                            }
                                            props.toggleFollowingProgress(false, u.id)
                                        })

                                }}>Follow</button>}
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
    );

}

export default Users;