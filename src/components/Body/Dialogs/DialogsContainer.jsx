import {sendNewMessageBodyCreator, updateNewMessageBodyCreator} from "../../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return (
        {
            dialogs: state.dialogsPage.dialogs,
            messages: state.dialogsPage.messages,
            newMessageBody:state.dialogsPage.newMessageBody
        }
    )
}
const mapDispatchToProps = (dispatch) => {
    return ({
            onSendMessageClick: () => {
                dispatch(sendNewMessageBodyCreator())
            },
            onNewMessageChange: (body) => {
                dispatch(updateNewMessageBodyCreator(body))
            }
        }
    )
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;