import React from 'react';
import classes from "./SelectedList.module.css"
import PostItem from "./PostItem";
import SelectedPostStatus from "./SelectedPostStatus";

const SelectedList = ({remove, posts, changeSelected, statusActive, statusTodo, statusDone}) => {

    return (
        <div className={classes.selectedPost}>
            {posts.filter(e => e.selected === true).map((post)=>
                    <PostItem changeSelected={changeSelected} remove={remove} post={post} key={post.id}/>
            )}
            <SelectedPostStatus posts={posts} statusActive={statusActive} statusTodo={statusTodo} statusDone={statusDone} />

        </div>
    );
};

export default SelectedList;