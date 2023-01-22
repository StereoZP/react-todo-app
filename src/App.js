import React, {useMemo, useState} from "react";
import './styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import MySearch from "./components/UI/search/MySearch";
import MyInput from "./components/UI/input/MyInput";



function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "React-app1", status: false},
        {id: 2, title: "React-app2", status: false},
        {id: 3, title: "React-app3", status: false},
    ]);

    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    

    const sortedPosts = useMemo(() => {
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts;
    }, [filter.sort, posts])

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedPosts])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <h1>todos</h1>

            <PostForm create={createPost}/>
            <PostList remove={removePost} posts={posts}/>
            <div className="filter-buttons">
                <div>
                    <span>{posts.length} item left</span>
                </div>
                <div>
                    <button>All</button>
                    <button>Active</button>
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
