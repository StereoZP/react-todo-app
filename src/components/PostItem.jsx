import React from 'react';
import MyButton from "./UI/button/MyButton";
import classes from "./PostItem.module.css";


const PostItem = (props) => {
    const {post:{ selected}, post, changeSelected, remove} = props

    const changeSelectedPost = () => {
        changeSelected(post)
    }

    const selectedChecked = [selected ? classes.postChecked : classes.post, props.className].join(' ')
    const statusChecked = [(post.status === 'Done') ? classes.postDone : classes.postActive, classes.postTitle].join(' ')


    return (
        <div className={selectedChecked}>
            <div className={classes.postItem}>
            <div>
                <input type="checkbox" checked={selected} onChange={changeSelectedPost}/>
                <span className={statusChecked}>{post.title}</span>
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