import React from 'react';
import PostItem from "./PostItem";


const PostList = ({posts, title, remove, changeStatus}) => {
    if(!posts.length){
        return (
            <h1 style={{textAlign: 'center'}}>
                {/*todos not found*/}
            </h1>
        )
    }

    return (
        <div>
            <h1 style={{textAlign:"center"}}>
                {title}
            </h1>
            {posts.map((post, index)=>
                <PostItem changeStatus={changeStatus} remove={remove} post={post} key={post.id}/>)}
        </div>
    );
};

export default PostList;