import { NavigationContainer } from '@react-navigation/native';
import { useEffect } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import BottomNavigation from './src/components/layout/BottomNavigation';
import store from './src/redux/store';


const App = () => {

	useEffect(() => {
		SplashScreen.hide();
	}, [])

	return (
		<Provider store={store}>
			<StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
			<SafeAreaView style={{ flex: 1, position: 'relative' }}>
				<NavigationContainer>
					<BottomNavigation />
				</NavigationContainer>
			</SafeAreaView>
		</Provider>
	)
}

export default App
