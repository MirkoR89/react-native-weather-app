import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useState } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Home from '../screen/Home';
import Location from '../screen/Location';
import Search from '../screen/Search';
import WeatherDetails from '../screen/WeatherDetails';
import BottomTab from './BottomTab';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
    const [active, setActive] = useState('Home')

    return (
        <SafeAreaView style={{ marginTop: 0, marginBottom: 0, flex: 1, width: '100%', height: '100%', backgroundColor: '#F1F1F1' }}>
            <StatusBar barStyle="dark-content" backgroundColor={'#F1F1F1'} translucent={true} />
            <Tab.Navigator tabBar={props => <BottomTab {...props} active={active} setActive={setActive} />} screenOptions={{ headerShown: false }} >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Search" component={Search} />
                <Tab.Screen name="Location" component={Location} />
                <Tab.Screen name="WeatherDetails" component={WeatherDetails} />
            </Tab.Navigator>
        </SafeAreaView>
    );
}

export default BottomNavigation;
