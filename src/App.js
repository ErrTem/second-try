import './App.css';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';



const App = (props) => {
  return (
    <Router>
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />

        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs/*'
              element={<DialogsContainer />} />

            {/* <Route path='/profile' element={<ProfileContainer />} />
            <Route path=":userId" element={<ProfileContainer />} /> 
            почему это не работает? */}

            {/* <Route path="/profile/*" element={<ProfileContainer />} /> */}

            <Route path="/profile" element={<ProfileContainer />}>
              <Route path=":userId" element={<ProfileContainer />} />
            </Route>




            <Route path='/users/*'
              element={<UsersContainer />} />

            <Route path='/news/*' element={<News />} />
            <Route path='/music/*' element={<Music />} />
            <Route path='/settings/*' element={<Settings />} />
            <Route path='/login/*' element={<Login />} />
          </Routes>

        </div>


      </div>
    </Router>
  );
}

export default App;
