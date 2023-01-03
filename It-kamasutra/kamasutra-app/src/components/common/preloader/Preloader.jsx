import s from './Preloader.module.scss';

import preloader from '../../../assets/images/loader.svg';

const Preloader = (props) => {
   return (
      <div className={s.preloader}>
         <img src={preloader} alt="preloader" />
      </div>
   )
}

export default Preloader;