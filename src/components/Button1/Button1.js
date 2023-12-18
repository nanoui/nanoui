import React from 'react';

function SimpleButton(props) {
    return (
        <button onClick={props.onClick}>
            {props.children}
        </button>
    );
}

export default SimpleButton;