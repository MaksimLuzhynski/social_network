import React from 'react';
import classes from './Dialogs.module.css';


const Dialogs = (props) => {
    return (
        <div>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    <div className={classes.dialog}>Vilaly</div>
                    <div className={classes.dialog + ' ' + classes.active}>Mark</div>
                    <div className={classes.dialog}>John</div>
                    <div className={classes.dialog}>Victor</div>
                    <div className={classes.dialog}>Ales</div>
                    <div className={classes.dialog}>Max</div>
                </div>
                <div className ={classes.messages}>
                    <div className={classes.message}>Hello</div>
                    <div className={classes.message}>Bonjour</div>
                    <div className={classes.message}>How are you?</div>
                    <div className={classes.message}>Yo!!!</div>
                </div>
            </div>
        </div>
    );
}
export default Dialogs;