import React from 'react';
import c from './App.module.css';
import Header from "./components/Header/Header";
import Navbar from "./components/NavBar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Friends from "./components/Friends/Friends"
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import {addPost,updateNewPostText} from "./redux/state"


const App = (props) => {
    return (
        <BrowserRouter>
            <div className={c.appWrapper}>
                <Header/>
                <Navbar NavBar={props.state.NavBar}/>
                <div className={'appWrapperContent'}>
                    <Route path='/messages' render={() => <Dialogs DialogsPage={props.state.DialogsPage}/>}/>
                    <Route path='/profile' render={() => <Profile newPost={updateNewPostText} addPost={addPost} ProfilePage={props.state.ProfilePage}/>}/>
                    <Route path='/friends' render={() => <Friends />}/>
                    <Route path='/music' render={() => <Music />}/>
                    <Route path='/settings' render={() => <Settings />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;
