import React from 'react';

import Users from './Users';

import { connect } from 'react-redux';
import { followAC, setUsersAC, unfollowAC, setTotalCountUsersAC, setCurrentPageAC, setIsFetchingAC } from '../../redux/users-reducer';
import axios from 'axios';

class UsersContainer extends React.Component {
   componentDidMount() {
      this.props.setIsFetching(true)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersForPage}`).then(response => {
         this.props.setUsers(response.data.items)
         this.props.setIsFetching(false)
         this.props.setTotalCountUsers(response.data.totalCount)
      })
   }

   changeCurrentPage = (currentPage) => {
      this.props.setCurrentPage(currentPage)
      this.props.setIsFetching(true)

      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.usersForPage}`).then(response => {
         this.props.setUsers(response.data.items)
         this.props.setIsFetching(false)
      })
   }

   render() {
      return <Users totalCountUsers={this.props.totalCountUsers}
         usersForPage={this.props.usersForPage}
         currentPage={this.props.currentPage}
         changeCurrentPage={this.changeCurrentPage}
         follow={this.props.follow}
         unfollow={this.props.unfollow}
         users={this.props.users}
         isFetching={this.props.isFetching} />
   }
}

const mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      usersForPage: state.usersPage.usersForPage,
      currentPage: state.usersPage.currentPage,
      totalCountUsers: state.usersPage.totalCountUsers,
      isFetching: state.usersPage.isFetching
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      follow: (userId) => {
         dispatch(followAC(userId))
      },
      unfollow: (userId) => {
         dispatch(unfollowAC(userId))
      },
      setUsers: (users) => {
         dispatch(setUsersAC(users))
      },
      setTotalCountUsers: (totalCountUsers) => {
         dispatch(setTotalCountUsersAC(totalCountUsers))
      },
      setCurrentPage: (currentPage) => {
         dispatch(setCurrentPageAC(currentPage))
      },
      setIsFetching: (isFetching) => {
         dispatch(setIsFetchingAC(isFetching))
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);