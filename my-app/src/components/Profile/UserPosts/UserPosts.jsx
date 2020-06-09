import c from "./UserPosts.module.css";
import React from "react";
import {updateNewPostText} from "../../../redux/state";
const UserPosts = (props) => {
    let posts = props.UserPosts.Posts.map(p =>{
        return(
            <div key={p.id}>
                <h3>{p.header}</h3>
                <p>{p.content}</p>
            </div>
        )
    })
    let headPost = React.createRef();
    let textPost = React.createRef();
    let sendPost = function(){
        props.addPost()
    }
    let onPostChange = () =>{
        let data = {headPost:headPost.current.value, textPost:textPost.current.value}
        updateNewPostText(data)
    }
    return (
        <div className={c.posts}>
            <h2>My posts</h2>
            <div className={c.newPost}>
                <form onChange={onPostChange}>
                    <input ref={headPost} value={props.UserPosts.newPostText.header} placeholder='Write your header post...'/>
                    <textarea ref={textPost} value={props.UserPosts.newPostText.content} placeholder='Write your post...'/>
                    <div className={c.buttonWrap}>
                        <button onClick={sendPost} type={'button'}>Send</button>
                    </div>
                </form>
            </div>
            {posts}
        </div>
    )
}
export default UserPosts