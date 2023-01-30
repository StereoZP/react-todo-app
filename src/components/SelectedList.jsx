import React from 'react';
import PostItem from "./PostItem";
import classes from "./SelectedList.module.css"

const SelectedList = ({removeSelectedPost, selected}) => {

    return (
        <div className={classes.selectedPost}>
            {selected.map((post)=>
                    <PostItem className={classes.selectedItem} remove={removeSelectedPost} post={post} key={post.id}/>
            )}
        </div>
    );
};

export default SelectedList;