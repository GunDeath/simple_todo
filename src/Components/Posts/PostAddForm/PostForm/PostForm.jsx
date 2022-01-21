import React, {useContext, useState} from 'react';
import MyInput from "../../../UI/input/MyInput";
import MyButton from "../../../UI/button/MyButton";
import {Context} from "../../../../Context";

const PostForm = () => {
    const createNewPost = useContext(Context)
    const [postData, setPostData] = useState({title: '', body: ''})
    const createPost = () => createNewPost(postData)
    const styles = { h1: {textAlign: 'center'}, hr: {margin: 15}}

    return (
        <div>
            <h2 style={styles.h1}>Create New Post</h2>
            <hr style={styles.hr}/>
            <MyInput
                placeholder='Add post title...'
                value={postData.title}
                onChange={e=>setPostData({...postData, title: e.target.value})}
            />
            <MyInput
                placeholder='Add post description...'
                value={postData.body}
                onChange={e=>setPostData({...postData, body: e.target.value})}
            />
            <MyButton onClick={createPost}>Add Post</MyButton>
        </div>
    );
};

export default PostForm;