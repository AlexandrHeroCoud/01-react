import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
let UserDialogs = [
    {userId: 12, userName: "Uncle Ben",userPreviewUrl: "https://i.pinimg.com/564x/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg", lastMessage: "Lorem lorem lorem", time: "04:28"},
    {userId: 13, userName: "Uncle Ben",userPreviewUrl: "https://i.pinimg.com/564x/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg", lastMessage: "Lorem lorem lorem", time: "04:28"},
    {userId: 14, userName: "Uncle Ben",userPreviewUrl: "https://i.pinimg.com/564x/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg", lastMessage: "Lorem lorem lorem", time: "04:28"},
    {userId: 15, userName: "Uncle Ben",userPreviewUrl: "https://i.pinimg.com/564x/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg", lastMessage: "Lorem lorem lorem", time: "04:28"},
    {userId: 16, userName: "Uncle Ben",userPreviewUrl: "https://i.pinimg.com/564x/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg", lastMessage: "Lorem lorem lorem", time: "04:28"},

]
let Messages = [
    {id:1, content: "Hi lorem lorem", time:"4:20"},
    {id:2, content: "How are you lorem lorem", time:"4:22"},
    {id:3, content: "I am fine, thanks lorem", time:"4:24"},
    {id:4, content: "How are you lorem", time:"4:25"},
    {id:5, content: "I am too lorem", time:"4:28"},
]
let Posts = [
    {id:1, header: "Header post1",content:"Fuck the world!!! We are FSociety", time:"4:28"},
    {id:2, header: "Header post2",content:"Fuck the world!!! We are FSociety", time:"4:28"},
    {id:3, header: "Header post3",content:"Fuck the world!!! We are FSociety", time:"4:28"},
    {id:4, header: "Header post4",content:"Fuck the world!!! We are FSociety", time:"4:28"},
]
let ProfileInfo = {
        userId: 1,
        imgHeadProfileUrl:"https://xakep.ru/wp-content/uploads/2018/01/151212/zahod-h.jpg",
        userAvatarUrl:"https://beztabu.net/uploads/770x433_DIR/media_news/2018/08/5b87da423bd60879544270.jpg",
        login:"Mr.Robot",
        bithday:"24.08.1996",
        city: "New-York",
        status:"fsociety"
    }
ReactDOM.render(
  <React.StrictMode>
    <App UserDialogs={UserDialogs}
         Messages={Messages}
         Posts={Posts}
         ProfileInfo={ProfileInfo}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
