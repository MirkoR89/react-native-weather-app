import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import BottomNavigation from './src/components/layout/BottomNavigation';
import store from './src/redux/store';


const App = () => {


	return (
		<Provider store={store}>
			<SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F1F1F1' }}>
				<StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
				<NavigationContainer>
					<BottomNavigation />
				</NavigationContainer>
			</SafeAreaView>
		</Provider>
	)
}

export default App
