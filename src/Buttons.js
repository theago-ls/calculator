import React from 'react';

import './Buttons.css';

export default function Buttons(props){
    return (
        <div className="layout-container">
            <button onClick={(e) => props.atualizarValor("ON")}>ON</button>
            <button onClick={(e) => props.atualizarValor("AC")}>AC</button>
            <button onClick={(e) => props.atualizarValor("C")}>C</button>
            <button onClick={(e) => props.atualizarValor("S")}>±</button>
            <button onClick={(e) => props.atualizarValor("7")}>7</button>
            <button onClick={(e) => props.atualizarValor("8")}>8</button>
            <button onClick={(e) => props.atualizarValor("9")}>9</button>
            <button onClick={(e) => props.atualizarValor("/")}>÷</button>
            <button onClick={(e) => props.atualizarValor("4")}>4</button>
            <button onClick={(e) => props.atualizarValor("5")}>5</button>
            <button onClick={(e) => props.atualizarValor("6")}>6</button>
            <button onClick={(e) => props.atualizarValor("X")}>×</button>
            <button onClick={(e) => props.atualizarValor("1")}>1</button>
            <button onClick={(e) => props.atualizarValor("2")}>2</button>
            <button onClick={(e) => props.atualizarValor("3")}>3</button>
            <button onClick={(e) => props.atualizarValor("-")}>-</button>
            <button onClick={(e) => props.atualizarValor("0")}>0</button>
            <button onClick={(e) => props.atualizarValor(".")}>.</button>
            <button onClick={(e) => props.atualizarValor("=")}> = </button>
            <button onClick={(e) => props.atualizarValor("+")}>+</button>          
        </div>
    );
}