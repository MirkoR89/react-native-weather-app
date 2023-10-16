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
			<SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent' }}>
				<StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
				<NavigationContainer>
					<BottomNavigation />
				</NavigationContainer>
			</SafeAreaView>
		</Provider>
	)
}

export default App
