import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import store, { persistor } from './src/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import Root from './src/clusters/root';

export default function App() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<NavigationContainer>
					<Root />
				</NavigationContainer>
			</PersistGate>
		</Provider>
	)
}