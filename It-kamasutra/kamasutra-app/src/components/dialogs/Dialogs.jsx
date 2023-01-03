import Dialog from './dialog/Dialog';
import Message from './message/Message';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';


import s from './Dialogs.module.scss';

const Dialogs = ({ state, addMessage, updateNewMessageTextCreator }) => {
   const dialogs = state.dialogsData.map(dialog => <Dialog key={dialog.id} name={dialog.name} id={dialog.id} urlImg={dialog.urlImg} />);
   const messages = state.messagesData.map(message => <Message key={message.id} message={message.message} />);

   const onMessageChange = (e) => {
      let textareaValue = e.target.value;
      updateNewMessageTextCreator(textareaValue);
   };

   return (
      <div className={s.dialogs}>
         <h1 className={s.dialogs__title}>Dialogs</h1>
         <ul className={s.dialogs__items}>
            {dialogs}
         </ul>
         <div className={s.dialogs__messages}>
            <div className={s.dialogs__messages_wrapper}>
               {messages}
            </div>
            <div className={s.dialogs__textarea}>
               <textarea onChange={onMessageChange} placeholder='Напишите сообщение...' value={state.newMessageText}></textarea>
               <FontAwesomeIcon icon={faPaperPlane} className={s.icon} onClick={addMessage} />
            </div>
         </div>
      </div>
   );
};

export default Dialogs;