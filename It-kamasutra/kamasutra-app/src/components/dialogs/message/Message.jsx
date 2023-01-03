import s from './Message.module.scss';

const Message = ({ message }) => {

   return (
      <div className={s.dialogs__message}>
         <p className={s.dialogs__text}>{message}</p>
      </div>
   );
};

export default Message;