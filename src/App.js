import React, {useCallback, useMemo, useState} from "react";
import './styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import SelectedList from "./components/SelectedList";
import cl from "./components/SelectedList.module.css"


function sortArray(array, sort) {
    if (sort) {
        return [...array].sort((a, b) => String(a[sort]).localeCompare(String(b[sort])))
    }
    return array;
}

export const STATUS = {
    DONE: "DONE",
    TODO: "TODO",
    ACTIVE: "ACTIVE",
}

function App() {
    const [tasks, setTasks] = useState([
        {id: 1, title: "React-app1", date: new Date().toLocaleString("en-US"), status: STATUS.TODO, selected: false},
        {id: 2, title: "React-app2", date: new Date().toLocaleString("en-US"), status: STATUS.TODO, selected: false},
        {id: 3, title: "React-app3", date: new Date().toLocaleString("en-US"), status: STATUS.TODO, selected: false},
        {id: 4, title: "React-app4", date: new Date().toLocaleString("en-US"), status: STATUS.TODO, selected: false},
        {id: 5, title: "React-app5", date: new Date().toLocaleString("en-US"), status: STATUS.TODO, selected: false},
        {id: 6, title: "React-app6", date: new Date().toLocaleString("en-US"), status: STATUS.TODO, selected: false},
        {id: 7, title: "React-app7", date: new Date().toLocaleString("en-US"), status: STATUS.TODO, selected: false},
        {id: 8, title: "React-app8", date: new Date().toLocaleString("en-US"), status: STATUS.TODO, selected: false},
    ]);

    const [filter, setFilter] = useState({sort: 'id', query: '', field: ''})

    const sortedAndSearchedPosts = useMemo(() => {
        const sortedPosts = sortArray(tasks, filter.sort);

        if (!filter.field || !sortedPosts.length) {
            return sortedPosts;
        }
        return sortedPosts.filter(post => {
            return String(post[filter.field]).toLowerCase().includes(filter.query.toLowerCase())
        })
    }, [filter, tasks])

    const createPost = (newPost) => {
        setTasks([...tasks, newPost])
    }

    const removePost = (post) => {
        setTasks(tasks.filter(p => p.id !== post.id))
    }

    const selectTask = (task) => {
        const newTasks = tasks.filter(p => p.id !== task.id);
        const sorted = sortArray([...newTasks, {...task, selected: !task.selected}], filter.sort)
        setTasks([...sorted]);
    }

    const removeCompletedPost = () => {
        const uncompletedTasks = tasks.filter(task => task.status !== STATUS.DONE);
        setTasks([...uncompletedTasks]);
    }

    const allPostFilter = () => {
        setFilter({sort: filter.sort, query: '', field: ''})
    }

    const activePostFilter = () => {
        setFilter({sort: filter.sort, query: STATUS.ACTIVE, field: 'status'})
    }

    const completedPostFilter = () => {
        setFilter({sort: filter.sort, query: STATUS.DONE, field: 'status'})
    }

    const selectedTasks = useMemo(() => tasks.filter((p) => p.selected), [tasks])
    const createChangeStatusHandler = useCallback((status) => (tasks) => {
        const newTasks = tasks.map((task) => ({
            ...task,
            status: task.selected ? status : task.status,
            selected: false
        }));
        setTasks([...sortArray(newTasks, filter.sort)]);
    }, [filter.sort])
    const changePostStatusActive = createChangeStatusHandler(STATUS.ACTIVE)
    const changePostStatusTodo = createChangeStatusHandler(STATUS.TODO)
    const changePostStatusDone = createChangeStatusHandler(STATUS.DONE)

    return (
        <div>
            <div className="App">
                <h1 className="headerText">todos</h1>
                <PostForm create={createPost}/>
                <PostList remove={removePost}
                          changeSelected={selectTask}
                          tasks={sortedAndSearchedPosts}
                          allPostFilter={allPostFilter}
                          activePostFilter={activePostFilter}
                          completedPostFilter={completedPostFilter}
                          removeCompletedPost={removeCompletedPost}/>
            </div>
            <div className={cl.selectedList}>
                {selectedTasks.length
                    ? <SelectedList selectedTasks={selectedTasks}
                                    tasks={tasks}
                                    statusActive={changePostStatusActive}
                                    statusTodo={changePostStatusTodo}
                                    statusDone={changePostStatusDone}
                                    remove={removePost}
                                    changeSelected={selectTask}/>
                    : null}
            </div>
        </div>
    );
}

export default App;
