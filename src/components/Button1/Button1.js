// src/components/Button1/index.js
import React from 'react';

function SimpleButton(props) {
    return (
        <button onClick={props.onClick}>
            {props.children}
        </button>
    );
}

export { SimpleButton };