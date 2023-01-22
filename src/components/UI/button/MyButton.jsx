import React from 'react';
import classes from './MyButton.module.css';

const MyButton = ({children,...props}) => {
    const stylesBtn = [classes.myBtn, props.className].join(' ')
    return (
        <button {...props} className={stylesBtn}>
            {children}
        </button>
    );
};

export default MyButton;