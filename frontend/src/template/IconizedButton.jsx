import React from 'react'

const IconizedButton = ({ icon, label, onClick, hidden, style }) => {
    return (
        !hidden &&
        <button 
            className={`btn btn-${style}`}
            onClick={onClick}>
            <i className={`fa fa-${icon}`}></i>
            <span className="label">{label}</span>
        </button>
    );
};

export default IconizedButton;