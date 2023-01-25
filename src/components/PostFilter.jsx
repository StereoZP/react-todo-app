import React from 'react';
import classes from './PostFilter.module.css'
import MyButton from './UI/button/MyButton';

const PostFilter = (props) => {

    const {posts, allPostFilter, activePostFilter, complitedPostFilter, removeCompletedPost} = props

    

    return (
        <div className={classes.filter}>
                <div>
                    <span>{posts.length>1 ? `${posts.length} items left` : `${posts.length} item left`}</span>
                </div>
                <div>
                    <MyButton className={classes.filterButtons} onClick={allPostFilter}>All</MyButton>
                    <MyButton className={classes.filterButtons} onClick={activePostFilter}>Active</MyButton>
                    <MyButton className={classes.filterButtons} onClick={complitedPostFilter}>Completed</MyButton>
                </div>
                <div>
                    <MyButton onClick={removeCompletedPost}>Clear completed</MyButton>
                </div>
            </div>
    );
};

export default PostFilter;