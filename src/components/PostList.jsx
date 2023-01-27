import React from 'react';
import PostItem from "./PostItem";
import {TransitionGroup,CSSTransition} from "react-transition-group";
import PostFilter from "./PostFilter";

const PostList = ({posts, title, remove, changeStatus, allPostFilter, activePostFilter, complitedPostFilter, removeCompletedPost}) => {
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
            <TransitionGroup>
                {posts.map((post, index)=>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                    <PostItem changeStatus={changeStatus} remove={remove} post={post}/>
                    </CSSTransition>
                )}
                <PostFilter allPostFilter={allPostFilter} activePostFilter={activePostFilter} complitedPostFilter={complitedPostFilter}
                            removeCompletedPost={removeCompletedPost} posts={posts}/>
            </TransitionGroup>
        </div>
    );
};

export default PostList;