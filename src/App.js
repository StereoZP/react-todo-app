import React, {useMemo, useState} from "react";
import './styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MyButton from "./components/UI/button/MyButton";

function sortArray (array, sort){
    if (sort) {
        return [...array].sort((a, b) => a[sort].localeCompare(b[sort]))
    }
    return array;
}

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "React-app1", status: false},
        {id: 2, title: "React-app2", status: false},
        {id: 3, title: "React-app3", status: false},
    ]);

    const [filter, setFilter] = useState({sort: '', query: '', field:''})
    const [modal, setModal] = useState(false)

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
        setModal(false)
    }
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    const changePostStatus = (post) => {
        post.status = !post.status;

        const newPosts = posts.filter(p => p.id !== post.id);
        newPosts.push(post);
        
        const sorted = sortArray(posts, filter.sort);
        setPosts([...sorted]);
    }

    return (
        <div className="App">
            <h1>todos</h1>

            <PostForm create={createPost}/>
            <PostList remove={removePost} changeStatus={changePostStatus} posts={sortedAndSearchedPosts}/>
            <div className="filter-buttons">
                <div>
                    <span>{posts.length} item left</span>
                </div>
                <div>
                    <button onClick={()=>setFilter({sort: filter.sort, query: '', field:''})}>All</button>
                    <button onClick={()=>setFilter({sort: filter.sort, query: 'false', field:'status'})}>Active</button>
                    <button>Completed</button>
                </div>
                <div>
                    <MyButton >Clear completed</MyButton>
                </div>
            </div>
        </div>
    );
}

export default App;
