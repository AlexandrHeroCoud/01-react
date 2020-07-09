import c from "./UserPosts.module.css";
import React from "react";

const UserPosts = (props) => {
    let posts = props.UserPosts.map(p =>{
        return(
            <div key={p.id}>
                <h3>{p.header}</h3>
                <p>{p.content}</p>
            </div>
        )
    })
    let headPost = React.createRef();
    let textPost = React.createRef();
    let onPostChange = () =>{
        let data = {headPost:headPost.current.value, textPost:textPost.current.value}
        props.updateNewPostText(data)
    }

    return (
        <div className={c.posts}>
            <h2>My posts</h2>
            <div className={c.newPost}>
                <form onChange={onPostChange}>
                    <input ref={headPost} value={props.newPostText.header} placeholder='Write your header post...'/>
                    <textarea ref={textPost} value={props.newPostText.content} placeholder='Write your post...'/>
                    <div className={c.buttonWrap}>
                        <button onClick={props.addPost} type={'button'}>Send</button>
                    </div>
                </form>
            </div>
            {posts}
        </div>
    )
}
export default UserPosts