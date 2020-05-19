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

const Dialogs = (props) => {
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <DialogItem name="Vilaly" id="1" />
                    <DialogItem name="Mark" id="2" />
                    <DialogItem name="John" id="3" />
                    <DialogItem name="Victor" id="4" />
                    <DialogItem name="Ales" id="5" />
                    <DialogItem name="Max" id="6" />
                    <DialogItem name="Marta" id="7" />
                </div>
                <div className={s.messages}>
                    <MessageItem message="Bonjour"/>
                    <MessageItem message="Hello"/>
                    <MessageItem message="How are you?"/>
                    <MessageItem message="Yo!!!"/>
                </div>
            </div>
        </div>
    );
}
export default Dialogs;