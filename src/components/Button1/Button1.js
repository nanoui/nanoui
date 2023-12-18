// src/components/Button1/index.js
import React from 'react';

export  const SimpleButton = ({  label, ...props }) => {
    return (
      <button
        type="button"
        {...props}
      >
        {label}
      </button>
    );
  };