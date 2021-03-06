import {sendNewMessageBodyCreator} from '../../../redux/dialogsReducer'
import Dialogs from './Dialogs'
import {connect} from 'react-redux'
import {withAuthRedirect} from '../../../hoc/withAuthRedirect'
import {compose} from 'redux'

const mapStateToProps = (state) => {
    return (
        {
            dialogs: state.dialogsPage.dialogs,
            messages: state.dialogsPage.messages,
            newMessageBody: state.dialogsPage.newMessageBody,
        }
    )
}
const mapDispatchToProps = (dispatch) => {
    return ({
            onSendMessageClick: (newMessageBody) => {
                dispatch(sendNewMessageBodyCreator(newMessageBody))
            }
        }
    )
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs)