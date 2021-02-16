
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/pages/Home';
import Cadastro from './src/pages/Cadastro';
import Produto from './src/pages/Produto';

const Stack = createStackNavigator()

function App(){
  return(
    <NavigationContainer initialRouteName='Home'>
       <Stack.Navigator>
         <Stack.Screen name="Home" component={Home}
          option={{title:'Home'}}/>
         <Stack.Screen name="Cadastro" component={Cadastro} 
          option={{title:'Cadastro'}}/>
          <Stack.Screen name="Produto" component={Produto} 
          option={{title:'Produto'}}/>
       </Stack.Navigator>
    </NavigationContainer>
    
  );
}
export default App;
