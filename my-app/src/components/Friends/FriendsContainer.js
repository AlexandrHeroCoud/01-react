import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setUsers,
    unfollow,
    setTotalUsersCount,
    setFetch,
    setToggleIsFollowing
} from "../../redux/Reducers/FriendsReducer";
import Friends from "./Friends";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

class FriendsClass extends React.Component{

    componentDidMount() {
        this.props.setFetch(true)
        usersAPI.getUsers(this.props.currentPage ,this.props.pageSize).then(data =>{
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            this.props.setFetch(false)
            }
        )
    }
    onPageChanged = (pageNum)=>{
        this.props.setCurrentPage(pageNum)
        this.props.setFetch(true)
        usersAPI.getUsers(pageNum ,this.props.pageSize).then(data =>{
                this.props.setUsers(data.items)
            this.props.setFetch(false)
            }
        )
    }
    render() {
        return(
            <>
                {this.props.state.isFetching ?<Preloader /> : null}
                <Friends
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                onPageChanged={this.onPageChanged}
                users={this.props.state.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                setToggleIsFollowing={this.props.setToggleIsFollowing}
                followingInProgress={this.props.followingInProgress}
            />
            </>
            )
    }
}


let mapStateToProps = (state)=>{
    return {
        state: state.FriendsReducer,
        pageSize: state.FriendsReducer.pageSize,
        totalUsersCount: state.FriendsReducer.totalUsersCount,
        currentPage: state.FriendsReducer.currentPage,
        followingInProgress: state.FriendsReducer.followingInProgress
    }
}

export default connect(mapStateToProps, {follow, unfollow,setUsers,setCurrentPage,setTotalUsersCount,setFetch, setToggleIsFollowing})(FriendsClass)