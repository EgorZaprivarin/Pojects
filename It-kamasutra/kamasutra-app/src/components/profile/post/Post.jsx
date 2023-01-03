import s from './Post.module.scss';

const Post = ({ message, likeCounter, pathImg }) => {
   return (
      <div className={s.post}>
         <div className={s.imgAndText}>
            <img src={pathImg} alt="avatar" />
            {message}
         </div>
         Like {likeCounter}
      </div>
   );
};

export default Post;