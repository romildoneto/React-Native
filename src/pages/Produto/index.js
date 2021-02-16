import React from 'react';
import {Text,TouchableOpacity,StyleSheet,View,FlatList} from 'react-native';


export default function produto (navigation){
    

    return(
       
        <View  style ={{
            flex:1,
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:"#2c3e50",
            

        }}
        >
            <Text style={{color:'#fff',fontSize:22}} >Essa é minha lista de Produtos</Text>
    <FlatList
    data = {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]}
    renderItem={()=>{
return(
    <Text style={{color:'#fff',fontSize:18}}>diversos produtos para você aproveitar</Text>
    
    


)

 }
    
 }
     
    />
         
        </View>
    )
    }
    const styles= StyleSheet.create({
      
    })

    