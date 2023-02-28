// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import home from '../screens/Home';
import information  from '../screens/Information';
import LirikLatin from '../screens/lirik/LirikLatin';
import LirikJawa from '../screens/lirik/LirikJawa';
import LirikArab from '../screens/lirik/LirikArab';
import YaRobbiSholli from '../screens/daftarLirikArab/DetailLirik';
import SplashScreen from '../screens/SplashScreen';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer >
      <Stack.Navigator  initialRouteName="SplashScreen"
        screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
      
      <Stack.Screen name="Home" component={home} />
      <Stack.Screen name="LirikLatin" component={LirikLatin} />
      <Stack.Screen name="LirikJawa" component={LirikJawa} />
      <Stack.Screen name="LirikArab" component={LirikArab} />
      <Stack.Screen name="detailLirik" component={YaRobbiSholli} />
      <Stack.Screen name="Information" component={information} />
      <Stack.Screen name='SplashScreen' component={SplashScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;