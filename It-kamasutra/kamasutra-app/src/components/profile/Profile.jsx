import ProfileInfo from './profileInfo/ProfileInfo';
import MyPostsContainer from './myPosts/MyPostsContainer';

import s from './profile.module.scss';


const Profile = () => {
   return (
      <main className={s.profile}>
         <div className={s.profile__img}>
            <img src="https://cdn.pixabay.com/photo/2016/03/15/02/42/floor-1256804__340.jpg" alt="travis" />
         </div>
         <div className={s.profile__wrapper}>
            <ProfileInfo />
            <MyPostsContainer />
         </div>
      </main>
   );
}

export default Profile;