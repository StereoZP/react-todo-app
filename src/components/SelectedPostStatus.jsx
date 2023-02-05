import React from 'react';
import MyButton from "./UI/button/MyButton";
import classes from "./SelectedPostStatus.module.css"



const SelectedPostStatus = (props) => {

    const {statusActive, statusTodo, statusDone, posts} = props

    const changeToActive = () => {
        statusActive(posts)
    }
    const changeToTodo = () => {
        statusTodo(posts)
    }
    const statusToDone = () => {
        statusDone(posts)
    }

    return (
        <div className={classes.btn}>
            <MyButton onClick={changeToActive}>Active</MyButton>
            <MyButton onClick={changeToTodo}>Todo</MyButton>
            <MyButton onClick={statusToDone}>Done</MyButton>
        </div>
    );
};

export default SelectedPostStatus;