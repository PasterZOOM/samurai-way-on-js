import React from 'react'
import Post from './Post/Post'
import s from './MyPosts.module.css'
import NewPost from './NewPost/NewPost'

const MyPosts = React.memo((props) => {
    let postElement =
        props.posts.map(p => <Post key={p.id}
                                   message={p.message}
                                   likes={p.likes}/>)
    return (
        <div className={s.content}>
            <NewPost newPostText={props.newPostText}
                     addPost={props.addPost}/>
            {postElement}
        </div>
    )
})

export default MyPosts