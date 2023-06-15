import React, { useRef } from 'react';
import { View, TouchableNativeFeedback } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


const Tab = createBottomTabNavigator();
export default function Root() {
	return (
		<Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false,  tabBarStyle: { display: 'flex' } }}>
			{TabArr.map((item, index) => {
				return (
					<Tab.Screen key={index} name={item.name} component={item.component} options={{ tabBarButton: (props) => <TabButton {...props} item={item} /> }} />
				)
			})}
		</Tab.Navigator>
	)
}
import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Auth/Login';
import Register from '../screens/Auth/Register';
import Chat from '../screens/Home/HomeScreens/Chat';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function Root() {
  return (
    <>
      {/* <Chat /> */}
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Register">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
