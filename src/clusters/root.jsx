import React, { useRef } from 'react';
import { View, TouchableNativeFeedback } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feather from 'react-native-vector-icons/Feather';
import MI from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../screens/Home/Home';
import Search from '../screens/Search/Search';
import Events from '../screens/Events/Events';
import Settings from '../screens/Settings/Settings';

const TabArr = [
	{ name: 'Home', component: Home, Icon: Feather, icon: 'home' },
	{ name: 'Search', component: Search, Icon: Feather, icon: 'search' },
	{ name: 'Events', component: Events, Icon: MI, icon: 'calendar' },
	{ name: 'Settings', component: Settings, Icon: Feather, icon: 'settings' },
]

const TabButton = (props) => {
	const { item, onPress, accessibilityState } = props;
	const focused = accessibilityState.selected;
	const viewRef = useRef(null);

	return (
		<TouchableNativeFeedback onPress={onPress} background={TouchableNativeFeedback.Ripple('#D0D0D0', true)}>
			<View className='flex-1 flex-row justify-center items-center'>
				<View ref={viewRef}><item.Icon name={props.item.icon} color={focused ? '#2A5251' : "#5A5A5A"} size={30} /></View>
			</View>
		</TouchableNativeFeedback>
	)
}


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