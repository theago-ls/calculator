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
            <Text style={styles.texto}>{props.valores.anterior}</Text>
            <Text style={styles.texto}>{props.valores.operacao}</Text>
            <Text style={styles.texto}>{props.valores.atual}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    tela: {
        flex: 1,
        display: 'flex',
        alignItems: 'flex-end',
        marginRight: 20,        
    },

    texto: {   
        flex:1,     
        fontFamily: 'digital',
        fontSize: 80,  
        color: 'rgba(0,0,0,0.6)',
    }
});