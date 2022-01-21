import React, {useContext} from 'react';
import MyButton from "../../UI/button/MyButton";
import cl from './PostItem.module.css'
import {Context} from "../../../Context";

const PostItem = ({post}) => {
    const remove = useContext(Context)
    return (
        <div className={cl.item__block}>
            <div className={cl.text__block}>
                <h2 className={cl.text__block_h2}>{post.id}. {post.title}</h2>
                <div className={cl.text__block_body}>{post.body}</div>
            </div>
            <MyButton onClick={()=>remove(post.id)}>Delete</MyButton>
        </div>
    );
};

export default PostItem;