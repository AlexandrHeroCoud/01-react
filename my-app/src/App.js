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
import {initializeApp} from "./redux/Reducers/AppReducer";
import Test from "./components/common/test/TEset";
const Preloader = React.lazy(()=> import('./components/common/Preloader/Preloader'));
class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        if (!this.props.initialized){
            return <Preloader classString={c.preloaderRoot}/>
        }
        return (
            <>
                <Route path='/test' render={() => <Preloader/>}/>
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
                    <Route path='/test' render={() => <Test/>}/>
                </div>
            </div>
        </>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
})

export default connect(mapStateToProps, {initializeApp})(App);
