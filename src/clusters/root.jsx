import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Chat from '../screens/Home/HomeScreens/Chat';
const Tab = createBottomTabNavigator();
export default function Root() {
	return (
		<>
			<Chat />
		</>
	)
}