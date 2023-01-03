import s from './Friend.module.scss';
import userPhoto from '../../../assets/images/user.webp';

const Friend = ({ name, urlImg }) => {
   return (
      <div className={s.friend}>
         <img src={urlImg ? urlImg : userPhoto} alt="avatar" />
         <p className={s.friend__name}>{name}</p>
      </div>
   );
};

export default Friend;