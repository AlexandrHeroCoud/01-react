import React from "react";

const Profile = () =>{
    return(<div className={'content'}>
        <img src="https://xakep.ru/wp-content/uploads/2018/01/151212/zahod-h.jpg" alt=""/>
        <div className={'UserData'}>
            <div className={'Avatar'}>
                <img src="https://beztabu.net/uploads/770x433_DIR/media_news/2018/08/5b87da423bd60879544270.jpg" alt=""/>
            </div>
            <div className={'UserMeta'}>
                <h2>Login</h2>
                <div>Birthday</div>
                <div>City</div>
                <div>Status</div>
            </div>
        </div>
        <div className={'posts'}>
            <h2>My posts</h2>
            <div className={'newPost'}>
                <form action="#s">
                    <textarea placeholder={'Write your post...'}/>
                    <div className={'buttonWrap'}><button>Send</button></div>
                </form>
            </div>

            <div>Post1</div>
            <div>Post2</div>
            <div>Post3</div>
            <div>Post4</div>
        </div>
    </div>)
}
export default Profile