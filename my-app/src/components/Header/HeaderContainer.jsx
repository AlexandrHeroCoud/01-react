import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getUserDataAuth} from "../../redux/Reducers/AuthReducer";


class HeaderContainer extends React.Component{

    componentDidMount() {
        this.props.getUserDataAuth()
    }

    render(){
        return(
            <Header auth={this.props.AuthReducer}/>
        )

    }
}
let mapStateToProps = (state) =>{
    return state
}
export default connect(mapStateToProps, {getUserDataAuth})(HeaderContainer)