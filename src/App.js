import React, { useState } from 'react';
import './App.css';

import Buttons from './Buttons';
import Screen from './Screen';

function App() {
  const [atual, setAtual] = useState('');
  const [anterior, setAnterior] = useState('');
  const [operacao, setOperacao] = useState('');
  const [light, setLight] = useState('#10710C');
  const [on, setOn] = useState(false);

  function luz(blight) {
    if (blight) {
      setLight('#5DFF00');
      setOn(true);
    } else {
      setLight('#10710C');
      setOn(false);
    }
  }

  function atualizarValor(valorAtual) {
    if (valorAtual === 'ON') {      
      if (on) {
        setAtual('');
        setAnterior('');
        setOperacao('');
        luz(false);
        return;
      }else {
        setAtual('0');        
        luz(true);
        return;
      }
    }
    if(on){
      switch (valorAtual) {
        case 'AC':
          setAnterior('');
          setAtual('0');
          setOperacao('');
          break;
        case 'C':
          setAtual('0');
          break;
        case '.':
          if (atual.length < 7) {
            setAtual(atual + valorAtual);
          }
          break;
        case '+':
          if (anterior !== '') {
            setAnterior(atual);
            setAtual(parseInt(atual) + parseInt(anterior));
          } else {
            setAnterior(atual);
            setAtual('0');
            setOperacao('+');
          }
          break;
        case '-':
          if (anterior !== '') {
            setAnterior(atual);
            setAtual(parseInt(atual) - parseInt(anterior));
          } else {
            setAnterior(atual);
            setAtual('0');
            setOperacao('-');
          }
          break;
        case '/':
          if (anterior !== '') {
            setAnterior(atual);
            setAtual(parseInt(atual) / parseInt(anterior));
          } else {
            setAnterior(atual);
            setAtual('0');
            setOperacao('÷');
          }
          break;
        case 'X':
          if (anterior !== '') {
            setAnterior(atual);
            setAtual(parseInt(atual) * parseInt(anterior));
          } else {
            setAnterior(atual);
            setAtual('0');
            setOperacao('×');
          }
          break;
        case '=':
          if (anterior !== '') {
            if (operacao === '+') {
              setAnterior(atual);
              setAtual(Number(anterior) + Number(atual));
            }
            if (operacao === '-') {
              setAnterior(atual);
              setAtual(Number(anterior) - Number(atual));
            }
            if (operacao === '÷') {
              setAnterior(atual);
              setAtual(Number(anterior) / Number(atual));
            }
            if (operacao === '×') {
              setAnterior(atual);
              setAtual(Number(anterior) * Number(atual));
            }
            setAnterior('');
            setOperacao('');
          } else {
            setAtual('ERR');
          }
          break;
        case 'S':
          if (atual !== '0') {
            setAtual(Number(atual)*-1);
          }
          break;
        default:
          if (atual.length < 8) {
            if (atual === '0' || atual === 'ERR') {
              setAtual(valorAtual);
            } else {
              setAtual(atual + valorAtual)
            }
          }
      }
    }
  }

  return (
    <div className="App">
      <div className="borda-exterior">
        <div className="borda-inferior">
          <div className="tela" style={{ backgroundColor: light }}>
            <Screen valores={{ atual, anterior, operacao }} />
          </div>
          <div className="botoes">
            <Buttons atualizarValor={atualizarValor} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
