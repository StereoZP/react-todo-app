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

const STATUS ={
    DONE:"Done",
    TODO:"Todo",
    ACTIVE:"Active",
}

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "React-app1", date:new Date().toLocaleString("en-US"), status: STATUS.TODO, selected: false},
        {id: 2, title: "React-app2", date:new Date().toLocaleString("en-US"), status: STATUS.TODO, selected: false},
        {id: 3, title: "React-app3", date:new Date().toLocaleString("en-US"), status: STATUS.TODO, selected: false},
        {id: 4, title: "React-app4", date:new Date().toLocaleString("en-US"), status: STATUS.TODO, selected: false},
        {id: 5, title: "React-app5", date:new Date().toLocaleString("en-US"), status: STATUS.TODO, selected: false},
        {id: 6, title: "React-app6", date:new Date().toLocaleString("en-US"), status: STATUS.TODO, selected: false},
        {id: 7, title: "React-app7", date:new Date().toLocaleString("en-US"), status: STATUS.TODO, selected: false},
        {id: 8, title: "React-app8", date:new Date().toLocaleString("en-US"), status: STATUS.TODO, selected: false},
    ]);

    console.log(posts)


    const [filter, setFilter] = useState({sort: '', query: '', field:''})

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
    }

    const changePostSelected = (post) => {
        post.selected = !post.selected
        post.status = STATUS.ACTIVE

            const newPosts = posts.filter(p => p.id !== post.id);
            newPosts.push(post);

            const sorted = sortArray(posts, filter.sort);
            setPosts([...sorted]);

    }

    const changePostStatus = (post) => {

        if (post.status === STATUS.TODO || post.status === STATUS.ACTIVE){
            post.selected = !post.selected
            post.status = STATUS.DONE;

            const newPosts = posts.filter(p => p.id !== post.id);
            newPosts.push(post);

            const sorted = sortArray(posts, filter.sort);
            setPosts([...sorted]);
        }
        else {
            post.status = STATUS.TODO;

            const newPosts = posts.filter(p => p.id !== post.id);
            newPosts.push(post);

            const sorted = sortArray(posts, filter.sort);
            setPosts([...sorted]);
        }

    }

    const removeCompletedPost = () => {
        const activePost = posts.filter(e => e.status === STATUS.TODO)
        setPosts([...activePost])
    }

    const allPostFilter = () =>{
        setFilter({sort: filter.sort, query: '', field:''})
    }

    const activePostFilter = () =>{
        setFilter({sort: filter.sort, query: 'ACTIVE', field:'status'})
    }

    const complitedPostFilter = () =>{
        setFilter({sort: filter.sort, query: 'DONE', field:'status'})
    }

    return (
        <div>
            <div className="App">
                <h1 className="headerText">todos</h1>
            <PostForm create={createPost}
                      STATUS={STATUS}/>
            <PostList remove={removePost}
                      changeSelected={changePostSelected}
                      posts={sortedAndSearchedPosts}
                      allPostFilter={allPostFilter}
                      activePostFilter={activePostFilter}
                      complitedPostFilter={complitedPostFilter}
                      removeCompletedPost={removeCompletedPost}/>
            </div>
            <div className={cl.selectedList}>
            <SelectedList posts={posts} selected={posts.selected} remove={removePost} changeStatus={changePostStatus}/>
            </div>
        </div>
    );
}

export default App;
