import React from 'react';
import MyButton from "./UI/button/MyButton";
import classes from "./PostItem.module.css";


const PostItem = (props) => {
    const {post:{status}, post, changeStatus, remove} = props

    const selectedPost = () => {
        changeStatus(post)
    }

    return (
        <div className={status ? classes.postChecked : classes.post}>
            <div className={classes.postItem}>
            <div className={classes.postContainer}>
                <input type="checkbox" checked={status} onChange={selectedPost}/>
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