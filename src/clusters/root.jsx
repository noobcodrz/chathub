import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


const Tab = createBottomTabNavigator();
export default function Root() {
	return (
		<View>
			<Text>Root</Text>
		</View>
	)
}