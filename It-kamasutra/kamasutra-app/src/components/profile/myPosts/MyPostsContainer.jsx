import { connect } from 'react-redux';
import { addPostCreator, updateNewPostTextCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => {
   return {
      state: state.profilePage
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addPost: (e) => {
         e.preventDefault()

         dispatch(addPostCreator())
      },
      updateNewPostTextCreator: (textareaValue) => {
         dispatch(updateNewPostTextCreator(textareaValue))
      }
   }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;