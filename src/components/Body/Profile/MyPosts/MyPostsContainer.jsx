import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profileReducer";

const mapStateToProps = (state) => {
    return ({
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    })
}
const mapDispatchToProps = (dispatch) => {
    return ({
            addPost: () => {
                dispatch(addPostActionCreator())
            },
            updateNewPostText: (text) => {
                dispatch(updateNewPostTextActionCreator(text))
            }
        }
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts)