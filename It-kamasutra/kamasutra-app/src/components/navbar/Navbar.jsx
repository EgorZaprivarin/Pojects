import s from './navbar.module.scss';

import { NavLink } from 'react-router-dom';

import Friend from './friend/Friend';

const setActive = navData => navData.isActive ? s.active : s.item;

const Navbar = ({ state, users }) => {
   const myFreind = users.filter(user => user.followed)
   const friend = myFreind.map(friend => <Friend key={friend.id} name={friend.name} urlImg={friend.photos.small} />)

   return (
      <nav className={s.nav}>
         <ul className={s.nav__list}>
            <li><NavLink to='/profile' className={setActive}>Profile</NavLink></li>
            <li><NavLink to='/users' className={setActive}>Users</NavLink></li>
            <li><NavLink to='/dialogs' className={setActive}>Messages</NavLink></li>
            <li><NavLink to='/news' className={setActive}>News</NavLink></li>
            <li><NavLink to='/music' className={setActive}>Music</NavLink></li>
            <li><NavLink to='/settings' className={setActive}>Settings</NavLink></li>
            <li>
               <NavLink to='/friends' className={setActive}>Friends</NavLink>
               <div className={s.friends}>
                  {friend}
               </div>
            </li>
         </ul>
      </nav>
   );
}

export default Navbar;