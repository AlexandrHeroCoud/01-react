import c from "./UserPosts.module.css";
import React from "react";
import FormPostProfile from "./FormPost";

class UserPosts extends React.Component {

    componentDidMount() {
        // setTimeout(() =>{
        //     this.setState({
        //         a: 12
        //     })
        // }, 2000)
    }

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     //return nextProps != this.props && nextState != nextState
    // }

    render() {
        let posts = this.props.UserPosts.map(p => {
            return (
                <div key={p.id}>
                    <h3>{p.header}</h3>
                    <p>{p.content}</p>
                </div>
            )
        })
        // let headPost = React.createRef();
        // let textPost = React.createRef();
        // let onPostChange = () =>{
        //     let data = {headPost:headPost.current.value, textPost:textPost.current.value}
        //     props.updateNewPostText(data)
        // }

        return (
            <div className={c.posts}>
                <div className={c.newPost}>
                    <FormPostProfile {...this.props} />
                </div>
                {posts}
            </div>
        )
    }
}

export default UserPosts