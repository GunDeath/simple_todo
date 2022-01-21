import React from 'react';
import MyButton from "../../UI/button/MyButton";
import MyModal from "../../UI/modal/MyModal";
import PostForm from "./PostForm/PostForm";

const styles = { h1: {textAlign: 'center'}, hr: {margin: 15}}

const PostAddForm = ({setVisible, visible}) => {
    return (
        <div style={{display: 'flex', flexDirection: "column", justifyContent:'center'}}>
            <h1 style={styles.h1}>Post Add Form</h1>
            <hr style={styles.hr}/>
            <MyButton onClick={()=>setVisible(true)}>Create New Post</MyButton>
            <MyModal visible={visible} setVisible={setVisible}>
                <PostForm/>
            </MyModal>
        </div>
    );
};

export default PostAddForm;