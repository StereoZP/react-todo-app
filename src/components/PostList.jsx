import React from 'react';
import PostItem from "./PostItem";
import {TransitionGroup,CSSTransition} from "react-transition-group";
import PostFilter from "./PostFilter";

const PostList = (props) => {

    const {tasks, title, remove, changeSelected, allPostFilter, activePostFilter, completedPostFilter, removeCompletedPost} = props

    return (
        <div>
            <h1 style={{textAlign:"center"}}>
                {title}
            </h1>
            <TransitionGroup>
                {tasks.map((post)=>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                    <PostItem changeSelected={changeSelected} remove={remove} post={post}/>
                    </CSSTransition>
                )}
                <PostFilter allPostFilter={allPostFilter} activePostFilter={activePostFilter} complitedPostFilter={completedPostFilter}
                            removeCompletedPost={removeCompletedPost} posts={tasks}/>
            </TransitionGroup>
        </div>
    );
};

export default PostList;