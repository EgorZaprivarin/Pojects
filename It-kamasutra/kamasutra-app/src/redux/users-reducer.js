const FOLLOW = 'FOLLOW',
   UNFOLLOW = 'UNFOLLOW',
   SET_USERS = 'SET_USERS',
   SET_TOTAL_COUNT_USERS = 'SET_TOTAL_COUNT_USERS',
   SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
   SET_IS_FETCHING = 'SET_IS_FETCHING';

const initialState = {
   users: [],
   currentPage: 1,
   usersForPage: 5,
   totalCountUsers: 0,
   isFetching: true
};

const usersReducer = (state = initialState, action) => {
   switch (action.type) {
      case FOLLOW:
         return {
            ...state,
            users: state.users.map(user => {
               if (user.id === action.userId) {
                  return { ...user, followed: true }
               }
               return user
            })
         }
      case UNFOLLOW:
         return {
            ...state,
            users: state.users.map(user => {
               if (user.id === action.userId) {
                  return { ...user, followed: false }
               }
               return user
            })
         }
      case SET_USERS: {
         return {
            ...state,
            users: action.users
         }
      }
      case SET_TOTAL_COUNT_USERS: {
         return {
            ...state,
            totalCountUsers: action.totalCountPages
         }
      }
      case SET_CURRENT_PAGE: {
         return {
            ...state,
            currentPage: action.currentPage
         }
      }
      case SET_IS_FETCHING: {
         return {
            ...state,
            isFetching: action.isFetching
         }
      }
      default:
         return state;
   }

};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const setTotalCountUsersAC = (totalCountPages) => ({ type: SET_TOTAL_COUNT_USERS, totalCountPages });
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setIsFetchingAC = (isFetching) => ({ type: SET_IS_FETCHING, isFetching });

export default usersReducer;