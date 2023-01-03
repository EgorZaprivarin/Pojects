import { connect } from 'react-redux';
import { addMessageCreator, updateNewMessageTextCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
   return {
      state: state.dialogsPage
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addMessage: () => {
         dispatch(addMessageCreator())
      },
      updateNewMessageTextCreator: (textareaValue) => {
         dispatch(updateNewMessageTextCreator(textareaValue))
      }
   }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;