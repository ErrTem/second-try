import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import './App.css';
import Preloader from './components/common/preloader/preloader';
// import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import PracticeContainer from './components/Practice/PracticeContainer';
// import ProfileContainer from './components/Profile/ProfileContainer';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import { initializeApp } from './redux/app-reducer';
import { getAuthUserData, logout } from './redux/auth-reducer';
import store from './redux/redux-store';
import { Provider } from 'react-redux';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))

class App extends Component {

  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    } else {
      return (
        <Suspense >
          <div className='app-wrapper'>
            <HeaderContainer />
            <Navbar />
            <div className='app-wrapper-content'>
              <Routes>
                <Route path='/dialogs/*'
                  element={<DialogsContainer />} />
                <Route path="/profile/*" element={<ProfileContainer />} />
                <Route path='/users/*'
                  element={<UsersContainer />} />
                <Route path='/practice/*'
                  element={<PracticeContainer />} />
                <Route path='/news/*' element={<News />} />
                <Route path='/music/*' element={<Music />} />
                <Route path='/settings/*' element={<Settings />} />
                <Route path='/login/*' element={<Login />} />
              </Routes>
            </div>
          </div>
        </Suspense>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = connect(mapStateToProps, { initializeApp })(App)

export let MainApp = (props) => {
  return <Router>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </Router>
}

