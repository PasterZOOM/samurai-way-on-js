import React from 'react';

const NewPost = (props) => {

    const addPost = () => {
        props.addPost()
    }

    const updateNewPostText = (e) => {
        let text = e.currentTarget.value
        props.updateNewPostText(text)
    }

    return (
        <div>
            <div>
                <textarea value={props.newPostText}
                          onChange={updateNewPostText}
                          placeholder={'Enter your text'}/>
            </div>
            <div>
                <button onClick={addPost}>New Post</button>
            </div>
        </div>
    )
}

export default NewPost;