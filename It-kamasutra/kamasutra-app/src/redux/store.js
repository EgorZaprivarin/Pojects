import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";
import profileReducer from "./profile-reducer";

const store = {
   _state: {
      profilePage: {
         postsData: [
            { id: 1, message: 'Hi, how are you??', likeCounter: '14', urlImg: 'https://www.pngkit.com/png/full/365-3654764_cristiano-ronaldo-icon-soccer-player-icon.png' },
            { id: 2, message: 'It\'s my first post', likeCounter: '10', urlImg: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png' }
         ],
         newPostText: ''
      },
      dialogsPage: {
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
      },
      navbar: {
         friends: [
            { id: 1, name: 'Masha', urlImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjWNkmhB4rzNc5YQ3MkdnEJWvMmMjVEF0Qpg4FEPQ&s' },
            { id: 2, name: 'Sasha', urlImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmRfqbUQ0IxjeQz0zQC9U6PFf6Ow4nbhTL4yhYs18&s' },
            { id: 3, name: 'Vasya', urlImg: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png' }
         ]
      }
   },
   getState() {
      return this._state;
   },
   _callSubscribe() {
      console.log('state changed');
   },
   subscribe(observer) {
      this._callSubscribe = observer;
   },
   dispatch(action) {

      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
      this._state.navbar = navbarReducer(this._state.navbar, action);

      this._callSubscribe(this);
   }

};

export default store;

window.store = store