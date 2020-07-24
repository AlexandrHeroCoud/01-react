import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logOut} from "../../redux/Reducers/AuthReducer";

class HeaderContainer extends React.Component{

    render(){
        return(
            <Header logOut={this.props.logOut} auth={this.props.AuthReducer}/>
        )

    }
}
let mapStateToProps = (state) =>{
    return state
}
export default connect(mapStateToProps, {logOut})(HeaderContainer)