import React from 'react';
import c from './App.module.css';
import Header from "./components/Header/Header";
import Navbar from "./components/NavBar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className={c.appWrapper}>
                <Header/>
                <Navbar/>
                <div className={'appWrapperContent'}>
                    <Route path='/dialogs' render={() => <Dialogs UserDialogs={props.UserDialogs} Messages={props.Messages}/>}/>
                    <Route path='/profile' render={() =><Profile ProfileInfo={props.ProfileInfo} Posts={props.Posts} />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;
