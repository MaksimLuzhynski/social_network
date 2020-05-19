import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink></div>
    )
}

const MessageItem = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

let dialogsData = [
    { id: 1, name: "Vitaly" },
    { id: 2, name: "Mark" },
    { id: 3, name: "John" },
    { id: 4, name: "Victor" },
    { id: 5, name: "Ales" },
    { id: 6, name: "Max" },
    { id: 7, name: "Marta" }
]
let messagesData = [
    { id: 1, message: "Bonjour" },
    { id: 2, message: "Hello" },
    { id: 3, message: "How are you?" },
    { id: 4, message: "Yo!!!" }
]

const Dialogs = (props) => {
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                    <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                    <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                    <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                    <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
                    <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
                    <DialogItem name={dialogsData[6].name} id={dialogsData[6].id} />
                </div>
                <div className={s.messages}>
                    <MessageItem message={messagesData[0].message} />
                    <MessageItem message={messagesData[1].message} />
                    <MessageItem message={messagesData[2].message} />
                    <MessageItem message={messagesData[3].message} />

                </div>
            </div>
        </div>
    );
}
export default Dialogs;