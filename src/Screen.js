import React from 'react';

import './Screen.css';

export default function Screen(props){
    return(
        <div className="tela-container">            
            <strong>{props.valores.anterior}</strong>
            <label>{props.valores.operacao}</label>
            <strong>{props.valores.atual}</strong>
        </div>
    );
}