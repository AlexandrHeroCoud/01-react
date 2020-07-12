import React from "react";
import c from "./Dialogs.module.css"
import UserDialogs from "./UserDialogs/UserDialogs";
import MessagesWindowContainer from "./MessagesWindow/MessagesWindowContainer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class DialogsContainer extends React.Component {

    componentDidMount(){

    }

    render(){

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
})


export default compose(
    connect(mapStateToProps, {}),
    withAuthRedirect
) (DialogsContainer)