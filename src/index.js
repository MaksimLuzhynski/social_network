import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let postData = [
  { id: 1, message: "Hi, how are you?", likesCount: "0" },
  { id: 2, message: "It is my first post.", likesCount: "23"},
  { id: 3, message: " Blabla.", likesCount: "2"},
  { id: 4, message: "Хэлов.", likesCount: "56"},
]

let dialogsData = [
  { id: 1, name: "Vitaly" },
  { id: 2, name: "Mark" },
  { id: 3, name: "John" },
  { id: 4, name: "Victor" },
  { id: 5, name: "Ales" },
  { id: 6, name: "Max" },
  { id: 7, name: "Marta" },
]

let messagesData = [
  { id: 1, message: "Bonjour" },
  { id: 2, message: "Hello" },
  { id: 3, message: "How are you?" },
  { id: 4, message: "Yo!!!" }
]

ReactDOM.render(
  <React.StrictMode>
    <App postData={postData} messagesData={messagesData} dialogsData={dialogsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
