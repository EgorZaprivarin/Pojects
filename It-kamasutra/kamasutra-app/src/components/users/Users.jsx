import s from './Users.module.scss';

import User from './user/User';
import Preloader from '../common/preloader/Preloader';

const Users = (props) => {
   let TotalPagesCount = Math.ceil(props.totalCountUsers / props.usersForPage),
      currentPage = props.currentPage,
      pages = [];

   for (let i = 1; i <= props.totalCountUsers; i++) {
      pages.push(i);
   }

   if (currentPage - 5 <= 0) {
      pages = pages.slice(0, 10)
   } else if (currentPage + 5 >= TotalPagesCount) {
      pages = pages.slice(TotalPagesCount - 10, TotalPagesCount)
   } else {
      pages = pages.slice(currentPage - 5, currentPage + 5)
   }

   const pagesTags = pages.map(page => {
      return <li className={currentPage === page ? s.activePageNumber : s.pageNumber}
         onClick={() => { props.changeCurrentPage(page) }}>{page}</li>
   })

   const users = props.users.map(user => {
      return <User key={user.id}
         id={user.id}
         name={user.name}
         photos={user.photos.small}
         status={user.status}
         location={user.location}
         followed={user.followed}
         follow={props.follow}
         unfollow={props.unfollow} />
   })
   console.log(props.setIsFetching)
   return (
      <div className={s.users}>
         <h1 className={s.users__title}>Users</h1>
         <ul className={s.users__list}>
            {props.isFetching ? <Preloader /> : users}
         </ul>
         <ul className={s.users__numberOfPages}>
            {pages.includes(1) ? '' : '. . .'}{pagesTags}{pages.includes(TotalPagesCount) ? '' : '...'}
         </ul>
      </div>
   )
}

export default Users;