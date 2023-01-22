import React from 'react';
import MyButton from "./UI/button/MyButton";
import classes from "./PostItem.module.css";
import {useState} from "react";


const PostItem = (props) => {

    const [checked, setChecked] = useState(false);

    const setCheck = () => {
        setChecked(!checked)
    }
    
    let msg;
    if(checked){
        msg = <span className={classes.strikeOn}>{props.post.title}</span>
        console.log(props.status)
    }else{
        msg = <span className={classes.strikeOff}>{props.post.title}</span>
    
    }

    return (
        <div className="post">
            <div>
                <input type="checkbox" checked={checked} onChange={setCheck}/>
                {msg}
            </div>
            <div className="post__btns">
                <MyButton onClick={() => props.remove(props.post)}>
                    X
                </MyButton>
            </div>
        </div>
    );
};

export default PostItem;