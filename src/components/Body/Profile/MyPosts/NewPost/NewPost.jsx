import React from 'react';
import {Field, reduxForm} from 'redux-form'

const NewPost = (props) => {

    const addNewPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (
        <div>
            <AddNewPostFormRedux onSubmit={addNewPost}/>
        </div>
    )
}
const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'New post text'} component={'textarea'} name={'newPostText'}/>
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    )
}
const AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostFormRedux'})(AddPostForm)


export default NewPost;