import React from 'react';
import MyButton from "./UI/button/MyButton";
import classes from "./PostItem.module.css";

const PostItem = (props) => {
    const {post:{status}, post, changeStatus, remove} = props

    return (
        <div className="post">
            <div>
                <input type="checkbox" checked={status} onChange={() => changeStatus(post)}/>
                <span className={status ? classes.strikeOn: classes.strikeOff}>{post.title}</span>     
            </div>
            <div className="post__btns">
                <MyButton onClick={() => remove(props.post)}>
                    Delete
                </MyButton>
            </div>
        </div>
    );
};

export default PostItem;