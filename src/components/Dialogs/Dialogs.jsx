import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';


const Dialogs = (props) => {
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <div className={s.dialog}><NavLink to="/dialogs/1">Vilaly</NavLink></div>
                    <div className={s.dialog}><NavLink to="/dialogs/2">Mark</NavLink></div>
                    <div className={s.dialog}><NavLink to="/dialogs/3">John</NavLink></div>
                    <div className={s.dialog}><NavLink to="/dialogs/4">Victor</NavLink></div>
                    <div className={s.dialog}><NavLink to="/dialogs/5">Ales</NavLink></div>
                    <div className={s.dialog}><NavLink to="/dialogs/6">Max</NavLink></div>
                    <div className={s.dialog + ' ' + s.active}><NavLink to= "/dialogs/7">Mark</NavLink></div>
                </div>
                <div className={s.messages}>
                    <div className={s.message}>Hello</div>
                    <div className={s.message}>Bonjour</div>
                    <div className={s.message}>How are you?</div>
                    <div className={s.message}>Yo!!!</div>
                </div>
            </div>
        </div>
    );
}
export default Dialogs;