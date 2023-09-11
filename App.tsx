import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import Home from './src/components/Home';
import store from './src/redux/store';

const App = () => {

	return (
		<Provider store={store}>
			<SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
				<StatusBar barStyle={'dark-content'} />
				<Home />
			</SafeAreaView>
		</Provider>
	);
}
export default App
