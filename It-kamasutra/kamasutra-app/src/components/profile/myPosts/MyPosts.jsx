import Post from '../post/Post';
import s from './MyPosts.module.scss';

const MyPosts = ({ state, updateNewPostTextCreator, addPost }) => {
   const posts = state.postsData.map(post => <Post key={post.id} message={post.message} likeCounter={post.likeCounter} pathImg={post.urlImg} />);

   const onChangePostText = (e) => {
      let textareaValue = e.target.value;
      updateNewPostTextCreator(textareaValue);
   }

   return (
      <div>
         <h3 className={s.profile__suptitle}>My Posts</h3>
         <form className={s.profile__form}>
            <textarea onChange={onChangePostText} className={s.textarea} type="text" placeholder='your news...' value={state.newPostText} />
            <button className={s.btn} onClick={addPost}>Send</button>
         </form>
         <div className={s.profile__posts}>
            {posts}
         </div>
      </div>
   );
};

export default MyPosts;