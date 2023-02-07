import React from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import {useState} from "react";
import classes from "./PostForm.module.css"
import {STATUS} from "../App";


const PostForm = ({create}) => {
    const [post, setPost] = useState({title: ''})

    const addNewPost = (e) => {
        e.preventDefault()

        const newPost = {
            ...post,
            id: Date.now(),
            date: new Date().toLocaleString("en-US"),
            status: STATUS.TODO,
            selected: false,
        }
        create(newPost);
        setPost({title: ''});
    }

    return (
        <form>
            <div className={classes.postForm}>
                <MyInput
                    value={post.title}
                    onChange={e => setPost({...post, title: e.target.value})}
                    type="text"
                    placeholder="What needs to be done?"/>
                <MyButton className={classes.addButton} onClick={addNewPost}>Add todo</MyButton>
            </div>
        </form>
    );
};

export default PostForm;