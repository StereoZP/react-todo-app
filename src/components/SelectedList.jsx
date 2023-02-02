import React from 'react';
import classes from "./SelectedList.module.css"
import SelectedPostItem from "./SelectedPostItem";

const SelectedList = ({remove, posts, changeStatus, changeSelected}) => {

    return (
        <div className={classes.selectedPost}>
            {posts.filter(e => e.selected === true).map((post)=>
                    <SelectedPostItem className={classes.selectedItem} changeStatus={changeStatus} changeSelected={changeSelected} remove={remove} post={post} key={post.id}/>
            )}
        </div>
    );
};

export default SelectedList;