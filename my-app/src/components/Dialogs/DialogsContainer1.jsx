import React from "react";
import c from "./Dialogs.module.css"
import UserDialogs from "./UserDialogs/UserDialogs";
import MessagesWindowContainer from "./MessagesWindow/MessagesWindowContainer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

class DialogsContainer extends React.Component {

    componentDidMount(){

    }

    render(){
        if(!this.props.isAuth) return <Redirect to={'/login'}/>
        return (
            <div className={c.dialogsWrapper}>
                <UserDialogs UserDialogs={this.props.DialogsPage.dialogs} />
                <MessagesWindowContainer />
            </div>
        )
    }
}
let mapStateToProps = (state) => ({
    DialogsPage: state.DialogsReducer.DialogsPage,
    isAuth: state.AuthReducer.isAuth
})

export default connect(mapStateToProps, {})(DialogsContainer)