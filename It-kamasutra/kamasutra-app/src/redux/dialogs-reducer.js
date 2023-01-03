const ADD_MESSAGE = 'ADD-MESSAGE',
   UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const initialState = {
   dialogsData: [
      { id: 1, name: 'Egor', urlImg: 'https://cdn-icons-png.flaticon.com/512/949/949548.png' },
      { id: 2, name: 'Vasya', urlImg: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png' },
      { id: 3, name: 'Sasha', urlImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmRfqbUQ0IxjeQz0zQC9U6PFf6Ow4nbhTL4yhYs18&s' },
      { id: 4, name: 'Masha', urlImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjWNkmhB4rzNc5YQ3MkdnEJWvMmMjVEF0Qpg4FEPQ&s' },
      { id: 5, name: 'Andrey', urlImg: 'https://www.pngkit.com/png/full/365-3654764_cristiano-ronaldo-icon-soccer-player-icon.png' }
   ],
   messagesData: [
      { id: 1, message: 'hey' },
      { id: 2, message: 'How are u?' },
      { id: 3, message: 'ZAEBIS' },
      { id: 4, message: 'Norm' },
   ],
   newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {

   switch (action.type) {
      case ADD_MESSAGE:
         const newMessage = {
            id: state.messagesData.length + 1,
            message: state.newMessageText
         };

         return {
            ...state,
            messagesData: [...state.messagesData, newMessage],
            newMessageText: ''
         }
      case UPDATE_NEW_MESSAGE_TEXT:
         return { ...state, newMessageText: action.newText }
      default:
         return state;
   }

};

export const addMessageCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });

export default dialogsReducer;