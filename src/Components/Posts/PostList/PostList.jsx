import React from 'react';
import PostItem from "../PostItem/PostItem";

const styles = { h1: {textAlign: 'center'}, hr: {margin: 15}}

const PostList = ({posts}) => {
    return (
        <div>
            <h1 style={styles.h1}>Post List</h1>
            <hr style={styles.hr}/>
            {posts.map(post =>
                <PostItem key={post.id} post={post}/>
            )}
        </div>
    );
};

export default PostList;