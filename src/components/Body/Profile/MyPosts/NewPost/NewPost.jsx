import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {maxLengthCreator, required} from '../../../../../utils/validators/validators'
import {Textarea} from '../../../../common/FormsControls/FormsControls'

const maxLength30 = maxLengthCreator(30)

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
                <Field component={  Textarea}
                       placeholder={'New post text'}
                       name={'newPostText'}
                       validate={[required, maxLength30]}/>
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    )
}
const AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostFormRedux'})(AddPostForm)

export default NewPost;