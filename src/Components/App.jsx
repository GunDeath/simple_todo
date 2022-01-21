import React, {useEffect, useState} from 'react';
import axios from "axios";
import PostList from "./Posts/PostList/PostList";
import {Context} from "../Context";
import MyButton from "./UI/button/MyButton";
import cl from './App.module.css'
import PostForm from "./Posts/PostAddForm/PostForm/PostForm";
import PostAddForm from "./Posts/PostAddForm/PostAddForm";

const App = () => {
    const [posts, setPosts] = useState([])
    const [modal, setModal] = useState(false)

    //Get posts from server//
    const getPostsFromServer = async () => {
        const responseData = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
        setPosts(responseData.data)
    }

    useEffect(() => {
        getPostsFromServer()
        console.log(posts)
    }, [])
    //////////////////////////

    //Methods////////////////
    const removePost = (id) => setPosts(posts.filter(post => post.id !== id))
    const createNewPost = (post) => {
        setPosts([...posts, {...post, id: posts.length + 1}])
        setModal(false)
    }
    ////////////////////////

    return (
        <div className={cl.App}>
            <div className={cl.app_left__block}>
                <Context.Provider value={createNewPost}>
                    <PostAddForm setVisible={setModal} visible={modal}/>
                </Context.Provider>
            </div>
            <div className={cl.app_right__block}>
                <Context.Provider value={removePost}>
                    <PostList posts={posts}/>
                </Context.Provider>
            </div>
        </div>
    );
};

export default App;