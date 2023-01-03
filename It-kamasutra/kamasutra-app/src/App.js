import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.scss';

import Header from './components/header/Header';
import Profile from './components/profile/Profile';
import News from './components/news/News';
import Music from './components/music/Music';
import Settings from './components/settings/Settings';
import DialogsContainer from './components/dialogs/DialogsContainer';
import NavbarContainer from './components/navbar/NavbarContainer';
import UsersContainer from './components/users/UsersContainer';

const App = () => {
  return (
    <Router>
      <div className="app-wrapper">
        <div className="container">
          <Header />
          <NavbarContainer />
          <div className='app-content'>
            <Routes>
              <Route path='/profile' element={<Profile />} />
              <Route path='/users' element={<UsersContainer />} />
              <Route path='/dialogs/*' element={<DialogsContainer />} />
              <Route path='/news' element={<News />} />
              <Route path='/music' element={<Music />} />
              <Route path='/settings' element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
