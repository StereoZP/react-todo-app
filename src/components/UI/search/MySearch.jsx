import React from 'react';
import MyInput from "../input/MyInput";

const MySearch = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder="Search..."
            />
        </div>
    );
};

export default MySearch;