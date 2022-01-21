import React from 'react';
import PostItem from "../PostItem/PostItem";
import MainTitle from "../MainTitleComponent/MainTitle";

const PostList = ({posts}) => {
    return (
        <div>
            <MainTitle title='Post List'>
                {posts.map(post =>
                    <PostItem key={post.id} post={post}/>
                )}
            </MainTitle>
        </div>
    );
};

export default PostList;