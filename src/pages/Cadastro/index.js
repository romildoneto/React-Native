import React from 'react';
import {Text,SafeAreaView,View,TextInput,StyleSheet,TouchableOpacity,} from 'react-native'


export default function Cadastro({navigation}) {
    // const {navigation} = props;


     return(
         <View style={styles.container}>
               <Text style={styles.titulo}>Faça seu cadastro</Text>
             
             <TextInput
               style={styles.input}
             placeholder="Digite seu nome"
             />
             
             <TextInput
             style={styles.input}
             placeholder="Digite seu email"
             />
               <TextInput
               style={styles.input}
               secureTextEntry={true}
               placeholder="Digite sua senha"
             />
           <TouchableOpacity
          
            >

           <Text style={styles.botaoText }>Enviar </Text>
           </TouchableOpacity>
           <TouchableOpacity

                style={{
                    borderStartColor:'#fff',
                    width:300,
                    height:30,
                    alignItems:'center',
                    justifyContent:'center',
                    borderRadius:5,
                }}
                    title = ' ir para  Produto' onPress={() =>
                    navigation.navigate('Produto')}>


                        <Text style = {{color:'#f0f9'}}>Entre na pagina de produtos</Text>
                    </TouchableOpacity>


           
            
         </View>
     )
    
}

const styles= StyleSheet.create({
container:{
flex:1,
alignItems:'center',
justifyContent:'center',
backgroundColor:"#2c3e50",

},


input:{
marginTop: 10,
padding:10,
width:300,
backgroundColor:'#fff',
fontSize:16,
fontWeight:'bold',
borderRadius: 3,
},

botaoText:{
marginTop: 10,
padding:10,
width:300,
backgroundColor:'#fff',
fontSize:16,
fontWeight:'bold',
borderRadius: 3,
color:'black',
},

titulo:{
marginTop: 10,
padding:10,
fontSize:16,
fontWeight:'bold',
borderRadius: 3,
alignItems:'center',
justifyContent:'center',
color:'#fff'

},
})
