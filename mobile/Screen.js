import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    Text,
    View
  } from 'react-native';

export default function Screen(props){
    return(
        <View style={styles.tela}>            
            <Text style={styles.texto} >{props.valores.anterior}</Text>
            <Text style={styles.texto}>{props.valores.operacao}</Text>
            <Text style={styles.texto}>{props.valores.atual}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    tela: {
        display: 'flex',
        alignItems: 'flex-end',
        paddingRight: 20,
    },

    texto: {
        fontFamily: 'Digital-7',
        fontSize: 60,  
        color: 'rgba(0,0,0,0.7)',
    }
});