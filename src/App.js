import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';
import { waitForDomChange } from '@testing-library/react';


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


function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">

          {/* <Route path="/dialogs" component={Dialogs} />
          <Route path="/profile" component={Profile} /> */}

          <Route path="/dialogs" render={ () => <Dialogs messagesData={props.messagesData} dialogsData={props.dialogsData}/>} />
          <Route path="/profile" render={ () => <Profile postData={props.postData}/>} />

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
