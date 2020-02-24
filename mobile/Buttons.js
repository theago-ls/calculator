import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    Text,
    View
  } from 'react-native';

export default function TouchableOpacitys(props){
    let op = .8;

    return (
        <SafeAreaView style={styles.layoutContainer}>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity activeOpacity={op} style={styles.buttons} onPress={(e) => props.atualizarValor("ON")}>
                    <Text style={styles.buttonsText}>ON</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={op} style={styles.buttons} onPress={(e) => props.atualizarValor("AC")}>
                    <Text style={styles.buttonsText}>AC</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={op} style={styles.buttons} onPress={(e) => props.atualizarValor("C")}>
                    <Text style={styles.buttonsText}>C</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={op} style={styles.buttons} onPress={(e) => props.atualizarValor("S")}>
                    <Text style={styles.buttonsText}>±</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity activeOpacity={op}style={styles.buttons} onPress={(e) => props.atualizarValor("7")}>
                    <Text style={styles.buttonsText}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={op} style={styles.buttons} onPress={(e) => props.atualizarValor("8")}>
                    <Text style={styles.buttonsText}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={op} style={styles.buttons} onPress={(e) => props.atualizarValor("9")}>
                    <Text style={styles.buttonsText}>9</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={op}style={styles.buttons} onPress={(e) => props.atualizarValor("/")}>
                    <Text style={styles.buttonsText}>÷</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity activeOpacity={op}style={styles.buttons} onPress={(e) => props.atualizarValor("4")}>
                    <Text style={styles.buttonsText}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={op} style={styles.buttons} onPress={(e) => props.atualizarValor("5")}>
                    <Text style={styles.buttonsText}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={op}style={styles.buttons} onPress={(e) => props.atualizarValor("6")}>
                    <Text style={styles.buttonsText}>6</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons} onPress={(e) => props.atualizarValor("X")}>
                    <Text style={styles.buttonsText}>×</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity activeOpacity={op} style={styles.buttons} onPress={(e) => props.atualizarValor("1")}>
                    <Text style={styles.buttonsText}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={op} style={styles.buttons} onPress={(e) => props.atualizarValor("2")}>
                    <Text style={styles.buttonsText}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={op} style={styles.buttons} onPress={(e) => props.atualizarValor("3")}>
                    <Text style={styles.buttonsText}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={op}style={styles.buttons} onPress={(e) => props.atualizarValor("-")}>
                    <Text style={styles.buttonsText}>-</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity activeOpacity={op} style={styles.buttons} onPress={(e) => props.atualizarValor("0")} title="0" >
                    <Text style={styles.buttonsText}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={op}style={styles.buttons} onPress={(e) => props.atualizarValor(".")} title="." >
                    <Text style={styles.buttonsText}>.</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={op} style={styles.buttons} onPress={(e) => props.atualizarValor("=")} title="=" >
                    <Text style={styles.buttonsText}>=</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={op}style={styles.buttons} onPress={(e) => props.atualizarValor("+")} title="+" >
                    <Text style={styles.buttonsText}>+</Text>
                </TouchableOpacity>
            </View>          
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    layoutContainer: {
        height: '100%',
        width: '100%',
        backgroundColor: '#EEE',              
    },

    buttons: {         
        backgroundColor: '#008081',        
        justifyContent: 'center',
        alignItems: 'center',
        width: '25%',    
    },

    buttonsText: {
        fontSize: 30,
        fontWeight: 'bold',
    },

    buttonsContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',        
    }
});
