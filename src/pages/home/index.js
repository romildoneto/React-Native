import React from 'react';
import {Text,TouchableOpacity,View, StyleSheet} from 'react-native';

export default function home (props){
    const {navigation} = props;

    return(
       
        <View  style ={{
            flex:1,
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:"#2c3e50",
        }}

        >
            <text style={{color:'#fff',fontSize:22}}>
                Seja bem-vindo(a) em nossa loja.
            </text>
            <text style = {{color:'#fff',fontSize:20}}>
                Aqui programador tem desconto , em nossos produtos!
            </text>
            

                <TouchableOpacity

                style={{
                    borderStartColor:'#fff',
                    width:150,
                    height:30,
                    alignItems:'center',
                    justifyContent:'center',
                    borderRadius:5,
                }}
                    title = ' ir para  Cadastro' onPress={() =>
                    navigation.navigate('Cadastro')}>


                        <Text style = {{color:'#f0f9',fontSize:20}}>Cadastre-se</Text>
                    </TouchableOpacity>

        </View>
    ) 
}
