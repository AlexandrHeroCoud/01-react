import React from 'react';
import c from './App.module.css';
import Navbar from "./components/NavBar/Navbar";
import ProfileComponent from "./components/Profile/ProfileContainer";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import store from "./redux/redux-store";
import FriendsContainer from "./components/Friends/FriendsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";



const App = () => {
    return (
            <div className={c.appWrapper}>
                <HeaderContainer />
                <Navbar navBar={store.getState().SidebarReducer.NavBar}/>
                <div className={'appWrapperContent'}>
                    <Route path='/messages' render={() => <Dialogs DialogsPage={store.getState().DialogsReducer.DialogsPage}/>}/>
                    <Route path='/profile/:userId?' render={() => <ProfileComponent ProfilePage={store.getState().ProfileReducer}/>}/>
                    <Route path='/friends' render={() => <FriendsContainer FriendsPage={store.getState().FriendsReducer} />}/>
                    <Route path='/music' render={() => <Music />}/>
                    <Route path='/settings' render={() => <Settings />}/>
                </div>
            </div>
    );
}
export default App;
