import s from './Dialog.module.scss';

import { NavLink } from 'react-router-dom';

const setActive = navData => navData.isActive ? s.active : '';

const Dialog = ({ name, id, urlImg }) => {
   const path = `/dialogs/${id}`;

   return (
      <li className={s.dialogs__item}>
         <img src={urlImg} alt="avatar" />
         <NavLink to={path} className={setActive}>{name}</NavLink>
      </li>
   );
};

export default Dialog;