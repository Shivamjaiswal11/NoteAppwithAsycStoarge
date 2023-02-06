// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screen/Home';
import Welcome from '../screen/Welcome';
import Login from '../screen/Login';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    
      <Stack.Navigator 
      screenOptions={{headerShown:false}}
      >
          <Stack.Screen name ="Welcome" component={Welcome}/>
          <Stack.Screen name ="Login" component={Login}/>
        <Stack.Screen name="Home" component={Home} />
      
      </Stack.Navigator>
 
  );
}

export default AppNavigator;