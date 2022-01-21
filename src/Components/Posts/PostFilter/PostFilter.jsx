import React, {useEffect, useState} from 'react';
import MainTitle from "../MainTitleComponent/MainTitle";
import MyInput from "../../UI/input/MyInput";
import MyButton from "../../UI/button/MyButton";

const PostFilter = ({setFilter, filter}) => {

    return (
        <div>
            <MainTitle title='Post Filter'>
                <div>
                    <MyInput
                        placeholder='Search query...'
                        value={filter.search}
                        onChange={e => setFilter({...filter, search:e.target.value})}
                    />
                </div>
                <div>
                    <select
                        value={filter.sort}
                        onChange={e => setFilter({...filter, sort:e.target.value})}
                    >
                        <option disabled value="">Sort by...</option>
                        <option value="title">Sort by post title</option>
                        <option value="body">Sort by description</option>
                    </select>
                </div>
            </MainTitle>
        </div>
    );
};

export default PostFilter;