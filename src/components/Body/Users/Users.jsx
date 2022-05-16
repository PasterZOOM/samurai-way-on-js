import React from 'react';
import s from './Users.module.css'
import {v1} from "uuid";

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: v1(),
                photoUrl: 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/ig2/MqXj-7Skelx32X1KmSmMCnSC5Fi6VIPMDvj4Y0fCyy8keZMLHM2LXsmCEh55rfocJevsF7cthbjk56UqJmtgaXPM.jpg?size=200x200&quality=95&crop=295,99,996,996&ava=1',
                followed: true,
                name: 'Ilya',
                status: 'Hello',
                location: {
                    country: 'Belarus',
                    city: 'Zaslavl\''
                }
            },
            {
                id: v1(),
                photoUrl: 'https://sun1.beltelecom-by-minsk.userapi.com/s/v1/ig2/0WjwvcCErMIaQDUMoLWF3hXVDF9YdmimGGfCqhRp6rOGz7xMK-Do57YanXLRdPM-hwg2sv3CJAWr5AJ8Pn3iBafT.jpg?size=200x200&quality=96&crop=210,63,948,948&ava=1',
                followed: false,
                name: 'Dasha',
                status: 'I am happy',
                location: {
                    country: 'Belarus',
                    city: 'Zaslavl\''
                }
            },
            {
                id: v1(),
                photoUrl: 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/ig2/MqXj-7Skelx32X1KmSmMCnSC5Fi6VIPMDvj4Y0fCyy8keZMLHM2LXsmCEh55rfocJevsF7cthbjk56UqJmtgaXPM.jpg?size=200x200&quality=95&crop=295,99,996,996&ava=1',
                followed: false,
                name: 'Ivan',
                status: 'Yo',
                location: {
                    country: 'Belarus',
                    city: 'Minsk'
                }
            },
            {
                id: v1(),
                photoUrl: 'https://sun2.beltelecom-by-minsk.userapi.com/s/v1/ig2/MqXj-7Skelx32X1KmSmMCnSC5Fi6VIPMDvj4Y0fCyy8keZMLHM2LXsmCEh55rfocJevsF7cthbjk56UqJmtgaXPM.jpg?size=200x200&quality=95&crop=295,99,996,996&ava=1',
                followed: true,
                name: 'Pasha',
                status: 'YoYo',
                location: {
                    country: 'Russia',
                    city: 'Moscow'
                }
            },
        ])
    }
    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                            <img src={u.photoUrl} className={s.userPhoto} alt={'avatar'}/>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
};

export default Users;