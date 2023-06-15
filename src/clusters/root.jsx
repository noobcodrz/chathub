import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ChatList from '../screens/Home/HomeScreens/ChatList';
const Tab = createBottomTabNavigator();
export default function Root() {
	return (
		<>
			<ChatList />
		</>
	)
}