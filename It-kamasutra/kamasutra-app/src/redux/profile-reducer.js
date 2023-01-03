const ADD_POST = 'ADD-POST',
   UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
   postsData: [
      { id: 1, message: 'Hi, how are you??', likeCounter: '14', urlImg: 'https://www.pngkit.com/png/full/365-3654764_cristiano-ronaldo-icon-soccer-player-icon.png' },
      { id: 2, message: 'It\'s my first post', likeCounter: '10', urlImg: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png' }
   ],
   newPostText: ''
};

const profileReducer = (state = initialState, action) => {

   switch (action.type) {
      case ADD_POST:
         const newPost = {
            id: state.postsData.length + 1,
            message: state.newPostText,
            likeCounter: 0,
            urlImg: 'https://www.pngkit.com/png/full/365-3654764_cristiano-ronaldo-icon-soccer-player-icon.png'
         };

         return {
            ...state,
            postsData: [...state.postsData, newPost],
            newPostText: ''
         }
      case UPDATE_NEW_POST_TEXT:
         return { ...state, newPostText: action.newText }
      default:
         return state;
   }

};

export const addPostCreator = () => ({ type: ADD_POST });
export const updateNewPostTextCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;