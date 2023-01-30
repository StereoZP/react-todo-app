import React, {useMemo, useState} from "react";
import './styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import SelectedList from "./components/SelectedList";
import cl from "./components/SelectedList.module.css"



function sortArray (array, sort){
    if (sort) {
        return [...array].sort((a, b) => a[sort].localeCompare(b[sort]))
    }
    return array;
}

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "React-app1", date:new Date().toLocaleString("en-US"), status: false},
        {id: 2, title: "React-app2", date:new Date().toLocaleString("en-US"), status: false},
        {id: 3, title: "React-app3", date:new Date().toLocaleString("en-US"), status: false},
        {id: 4, title: "React-app4", date:new Date().toLocaleString("en-US"), status: false},
        {id: 5, title: "React-app5", date:new Date().toLocaleString("en-US"), status: false},
        {id: 6, title: "React-app4", date:new Date().toLocaleString("en-US"), status: false},
        {id: 7, title: "React-app5", date:new Date().toLocaleString("en-US"), status: false},
        {id: 8, title: "React-app4", date:new Date().toLocaleString("en-US"), status: false},
    ]);

    const [filter, setFilter] = useState({sort: '', query: '', field:''})

    const [selected, setSelected] = useState([])

    const sortedPosts = useMemo(() => sortArray(posts, filter.sort), [filter.sort, posts])

    const sortedAndSearchedPosts = useMemo(() => {
        if(!filter.field || !sortedPosts.length){
            return sortedPosts;
        }
        return sortedPosts.filter(post => {
            return String(post[filter.field]).toLowerCase().includes(filter.query.toLowerCase())
        })
    }, [filter.query, filter.field, sortedPosts])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
        setSelected(selected.filter(p => p.id !== post.id))
    }
    const removeSelectedPost = (post) => {
        setSelected(selected.filter(p => p.id !== post.id))
    }

    const changePostStatus = (post) => {
        post.status = !post.status;

        const newPosts = posts.filter(p => p.id !== post.id);
        newPosts.push(post);
        
        const sorted = sortArray(posts, filter.sort);
        setPosts([...sorted]);

        const selectedPost = posts.filter(e => e.status === true)
        setSelected([...selectedPost])
    }

    const removeCompletedPost = () => {
        const activePost = posts.filter(e => e.status === false)
        setPosts([...activePost])
        setSelected(selected.filter(e => e.status === false))
    }

    const allPostFilter = () =>{
        setFilter({sort: filter.sort, query: '', field:''})
    }

    const activePostFilter = () =>{
        setFilter({sort: filter.sort, query: 'false', field:'status'})
    }

    const complitedPostFilter = () =>{
        setFilter({sort: filter.sort, query: 'true', field:'status'})
    }

    return (
        <div>
            <div className="App">
                <h1 className="headerText">todos</h1>
            <PostForm create={createPost}/>
            <PostList remove={removePost}
                      changeStatus={changePostStatus}
                      posts={sortedAndSearchedPosts}
                      allPostFilter={allPostFilter}
                      activePostFilter={activePostFilter}
                      complitedPostFilter={complitedPostFilter}
                      removeCompletedPost={removeCompletedPost}/>
            </div>
            <div className={cl.selectedList}>
            <SelectedList posts={posts} selected={selected} removeSelectedPost={removeSelectedPost}/>
            </div>
        </div>
    );
}

export default App;
