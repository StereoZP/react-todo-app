import React from 'react';
import MySelect from "./UI/select/MySelect";
import st from './PostFilter.module.css'

const PostFilter = ({filter, setFilter,children}) => {
    return (
        <div className={st.filter}>
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort:selectedSort})}
                defaultValue="Select"
                options={[
                    {value: 'title', name:'Name'},
                    {value: 'body', name:'Description'},
                ]}
            />
            {children}
        </div>
    );
};

export default PostFilter;