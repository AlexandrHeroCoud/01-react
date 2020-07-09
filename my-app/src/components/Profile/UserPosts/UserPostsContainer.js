import React from "react";
import {addPost, updateNewPostText} from "../../../redux/Reducers/ProfileReducer";
import UserPosts from "./UserPosts";
import {connect} from "react-redux";



let mapStateToProps = (props) =>{
    return{
        UserPosts: props.ProfileReducer.statePost.Posts,
        newPostText: props.ProfileReducer.statePost.newPostText
    }
}

const UserPostsContainer = connect(mapStateToProps, {updateNewPostText, addPost}) (UserPosts);
export default UserPostsContainer