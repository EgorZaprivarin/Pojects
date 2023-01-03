import { connect } from 'react-redux';
import Navbar from './Navbar';

const mapStateToProps = (state) => {
   return {
      state: state.navbar,
      users: state.usersPage.users
   }
}

const NavbarContainer = connect(mapStateToProps)(Navbar);

export default NavbarContainer;