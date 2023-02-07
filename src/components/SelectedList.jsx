import React from 'react';
import classes from "./SelectedList.module.css"
import PostItem from "./PostItem";
import MyButton from "./UI/button/MyButton";

const SelectedList = ({remove, selectedTasks, tasks, changeSelected, statusActive, statusTodo, statusDone}) => {
    return (
        <div className={classes.selectedPost}>
            <div>
                {selectedTasks.map((post) =>
                    <PostItem changeSelected={changeSelected} remove={remove} post={post} key={post.id}/>
                )}
            </div>
            <div className={classes.btn}>
                <MyButton onClick={() => statusActive(tasks)}>Active</MyButton>
                <MyButton onClick={() => statusTodo(tasks)}>Todo</MyButton>
                <MyButton onClick={() => statusDone(tasks)}>Done</MyButton>
            </div>
        </div>
    );
};

export default SelectedList;