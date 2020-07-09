import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setUserDataAuth} from "../../redux/Reducers/AuthReducer";
import * as axios from "axios";

class HeaderContainer extends React.Component{

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true},{ headers: {
                'API-KEY': '95ba29c3-f0ce-4ab2-ad81-8bed9d6d86ce'
            }
        }).then(response=>{
            if(response.data.resultCode === 0){
                let {id, login, email} = response.data.data;
                this.props.setUserDataAuth(id, login, email)
            }
        })
    }

    render(){
        return(
            <Header {...this.props}/>
        )

    }
}
let mapStateToProps = (state) =>{
    return state
}
export default connect(mapStateToProps, {setUserDataAuth})(HeaderContainer)