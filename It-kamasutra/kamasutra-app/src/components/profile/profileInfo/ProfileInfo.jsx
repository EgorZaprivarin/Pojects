import s from './ProfileInfo.module.scss';

const ProfileInfo = () => {
   return (
      <div className={s.profile__person}>
         <img src="https://cdn-icons-png.flaticon.com/512/949/949548.png" alt="avatar" />
         <div>
            <h3 className={s.name}>Egor Z.</h3>
            <p>Data of Birth: 5 april</p>
            <p>City: Minks</p>
            <p>Education: MGEK'20</p>
            <p>Web Site: no</p>
         </div>
      </div>
   );
};

export default ProfileInfo;