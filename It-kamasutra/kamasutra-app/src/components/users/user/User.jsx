import s from './User.module.scss';
import userPhoto from '../../../assets/images/user.webp';

const User = ({ id, name, photos, status, location, followed, follow, unfollow }) => {
   const btn = followed ?
      <button onClick={() => unfollow(id)} className={s.user__btn}>Unfollow</button> :
      <button onClick={() => follow(id)} className={s.user__btn}> Follow</ button>

   return (
      <div className={s.user}>
         <div className={s.user__leftSide}>
            <img src={photos !== null ? photos : userPhoto} alt="Avatar" className={s.user__photo} />
            {btn}
         </div>
         <div className={s.user__rightSide}>
            <div className={s.user__nameAndComments}>
               <p className={s.user__name}>{name}</p>
               <p className={s.user__comments}>{status}</p>
            </div>
            <div className={s.user__location}>
               <p className={s.user__country}>{'location.country'},</p>
               <p className={s.user__city}>{'location.city'}</p>
            </div>
         </div>
      </div>
   );
}

export default User;