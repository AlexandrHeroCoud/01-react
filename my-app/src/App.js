import React from 'react';
import c from './App.module.css';
import Navbar from "./components/NavBar/Navbar";
import ProfileComponent from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer1";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Login from "./components/Login/Login"
import {Route} from "react-router-dom";
import store from "./redux/redux-store";
import FriendsContainer from "./components/Friends/FriendsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {getUserDataAuth} from "./redux/Reducers/AuthReducer";


class App extends React.Component {
    componentDidMount() {
        this.props.getUserDataAuth()
    }

    render() {
        return (
            <div className={c.appWrapper}>
                <HeaderContainer/>
                <Navbar navBar={store.getState().SidebarReducer.NavBar}/>
                <div className={'appWrapperContent'}>
                    <Route path='/messages' render={() => <DialogsContainer/>}/>
                    <Route path='/profile/:userId?' render={() => <ProfileComponent />}/>
                    <Route path='/friends' render={() => <FriendsContainer />}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}

export default connect(null, {getUserDataAuth})(App);
