import React from 'react';
import classes from "./PostItem.module.css";
import MyButton from "./UI/button/MyButton";

const SelectedPostItem = (props) => {

    const {post:{selected}, post, changeStatus, remove} = props

    const changeStatusPost = () => {
        changeStatus(post)
    }

    const selectedChecked = [selected ? classes.postChecked : classes.post, props.className].join(' ')
    const statusChecked = [(post.status === 'Done') ? classes.postDone : classes.postActive, classes.postTitle].join(' ')

    return (
        <div className={selectedChecked}>
            <div className={classes.postItem}>
                <div>
                    <input type="checkbox"  onChange={changeStatusPost}/>
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

export default SelectedPostItem;