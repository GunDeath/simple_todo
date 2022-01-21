import React, {useEffect, useMemo, useState} from 'react';
import axios from "axios";
import PostList from "./Posts/PostList/PostList";
import {Context} from "../Context";
import cl from './App.module.css'
import PostAddForm from "./Posts/PostAddForm/PostAddForm";
import PostFilter from "./Posts/PostFilter/PostFilter";

const App = () => {
    const [posts, setPosts] = useState([])
    const [modal, setModal] = useState(false)
    const [filter, setFilter] = useState({sort: '', search: ''})

    //Get posts from server//
    const getPostsFromServer = async () => {
        const responseData = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
        setPosts(responseData.data)
    }

    useEffect(() => {
        getPostsFromServer()
    }, [])
    //////////////////////////

    //Filter Methods//
    const sortMethod = useMemo(()=>{
        if(filter.sort){
            return [...posts.sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]))]
        }
        return posts;
    }, [posts, filter.sort])

    const searchArray = useMemo(()=>{
        return [...sortMethod.filter(post => post.title.toLowerCase().includes(filter.search.toLowerCase()))]
    }, [sortMethod, filter.search])

    //Methods////////////////
    const removePost = (id) => setPosts(posts.filter(post => post.id !== id))
    const createNewPost = (post) => {
        setPosts([...posts, {...post, id: Number(posts[posts.length-1].id) + 1}])
        setModal(false)
    }
    ////////////////////////

    return (
        <div className={cl.App}>
            <div className={cl.app_left__block}>
                <Context.Provider value={createNewPost}>
                    <PostAddForm setVisible={setModal} visible={modal}/>
                </Context.Provider>
                <PostFilter setFilter={setFilter} filter={filter}/>
            </div>
            <div className={cl.app_right__block}>
                <Context.Provider value={removePost}>
                    <PostList posts={searchArray}/>
                </Context.Provider>
            </div>
        </div>
    );
};

export default App;