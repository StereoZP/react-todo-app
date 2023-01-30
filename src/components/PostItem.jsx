import React from 'react';
import MyButton from "./UI/button/MyButton";
import classes from "./PostItem.module.css";


const PostItem = (props) => {
    const {post:{status}, post, changeStatus, remove} = props

    const changeStatusPost = () => {
       changeStatus(post)
    }

    const statusChecked = [status ? classes.postChecked : classes.post, props.className].join(' ')
    return (
        <div className={statusChecked}>
            <div className={classes.postItem}>
            <div>
                <input type="checkbox" checked={status} onChange={changeStatusPost}/>
                <span className={classes.postTitle}>{post.title}</span>
            </div>

            <div className="post__btns">
                <MyButton onClick={() => remove(props.post)}>
                    Delete
                </MyButton>
            </div>
            </div>
            <div className={classes.postDate}>{post.date}</div>
        </div>
    );
};

export default PostItem;