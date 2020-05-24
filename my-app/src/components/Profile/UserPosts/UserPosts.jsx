import c from "./UserPosts.module.css";
import React from "react";

const UserPosts = (props) => {
    let posts = props.Posts.map(p =>{
        return(
            <div key={p.id}>
                <h3>{p.header}</h3>
                <p>{p.content}</p>
            </div>
        )
    })
    return (
        <div className={c.posts}>
            <h2>My posts</h2>
            <div className={c.newPost}>
                <form action="#s">
                    <input placeholder='Write your header post...'/>
                    <textarea placeholder='Write your post...'/>
                    <div className={c.buttonWrap}>
                        <button>Send</button>
                    </div>
                </form>
            </div>

            {posts}
        </div>
    )
}
export default UserPosts