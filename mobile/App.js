/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet, 
  StatusBar,
  View
} from 'react-native';

import Buttons from './Buttons';
import Screen from './Screen';

const App: () => React$Node = () => {
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

  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#008081'
    },
  
    tela: {      
      margin: '5%',
      backgroundColor: light,  
      borderWidth: 4,
      borderColor: '#000',
      borderStyle: 'solid'       
    },
  
    botoes: {  
      flex: 2,
    },
  });

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}> 
        <View style={styles.tela} >
          <Screen valores={{ atual, anterior, operacao }}/>
        </View>
        <View style={styles.botoes} >
          <Buttons atualizarValor={atualizarValor}/>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
