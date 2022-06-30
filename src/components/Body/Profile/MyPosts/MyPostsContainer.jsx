import MyPosts from './MyPosts'
import {connect} from 'react-redux'
import {addPostActionCreator} from '../../../../redux/profileReducer'

const mapStateToProps = (state) => {
    return ({
        posts: state.profilePage.posts
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
            addPost: (newPostText) => {
                dispatch(addPostActionCreator(newPostText))
            }
        }
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts)