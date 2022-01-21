import React, {useEffect, useState} from 'react';
import axios from "axios";
import PostList from "./Posts/PostList/PostList";
import {Context} from "../Context";
import MyButton from "./UI/button/MyButton";

const App = () => {
    const [posts, setPosts] = useState([])

    //Get posts from server//
    const getPostsFromServer = async () => {
        const responseData = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=20')
        setPosts(responseData.data)
    }

    useEffect(()=>{
        getPostsFromServer()
        console.log(posts)
    }, [])
    //////////////////////////

    //Methods////////////////
    const removePost = (id) => setPosts(posts.filter(post => post.id !== id))
    ////////////////////////

    return (
        <div className='App'>
            <div>
                <form action="">
                    <input type="text" placeholder='Add post title'/>
                    <input type="text" placeholder='Add post description'/>
                    <MyButton>Add Post</MyButton>
                </form>
            </div>
            <div>
                <Context.Provider value={removePost}>
                    <PostList posts={posts}/>
                </Context.Provider>
            </div>
        </div>
    );
};

export default App;