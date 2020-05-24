import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './Message/Message';


let dialogsData = [
    { id: 1, name: "Vitaly" },
    { id: 2, name: "Mark" },
    { id: 3, name: "John" },
    { id: 4, name: "Victor" },
    { id: 5, name: "Ales" },
    { id: 6, name: "Max" },
    { id: 7, name: "Marta" },
]
let dialogsElements = dialogsData.map(d => <DialogItem name={d.name} id={d.id} />);


let messagesData = [
    { id: 1, message: "Bonjour" },
    { id: 2, message: "Hello" },
    { id: 3, message: "How are you?" },
    { id: 4, message: "Yo!!!" }
]
let messagesElements = messagesData.map(m => <MessageItem message={m.message} />);


const Dialogs = (props) => {
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
            </div>
        </div>
    );
}
export default Dialogs;