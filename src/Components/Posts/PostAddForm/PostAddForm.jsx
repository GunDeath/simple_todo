import React from 'react';
import MyButton from "../../UI/button/MyButton";
import MyModal from "../../UI/modal/MyModal";
import PostForm from "./PostForm/PostForm";
import MainTitle from "../MainTitleComponent/MainTitle";
import cl from './PostAddForm.module.css'

const PostAddForm = ({setVisible, visible}) => {
    return (
        <div>
            <MainTitle title='Post Add Form'>
                <div className={cl.main_block}>
                    <MyButton onClick={()=>setVisible(true)}>Create New Post</MyButton>
                    <MyModal visible={visible} setVisible={setVisible}>
                        <PostForm/>
                    </MyModal>
                </div>
            </MainTitle>
        </div>
    );
};

export default PostAddForm;