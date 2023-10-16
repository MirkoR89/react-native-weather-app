import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useState } from 'react';
import Home from '../screen/Home';
import Location from '../screen/Location';
import Search from '../screen/Search';
import WeatherDetails from '../screen/WeatherDetails';
import BottomTab from './BottomTab';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
    const [active, setActive] = useState('Home')

    return (
        <Tab.Navigator
            tabBar={props => <BottomTab {...props} active={active} setActive={setActive} />} screenOptions={{ headerShown: false }} >
            <Tab.Screen name="Home" children={props => <Home {...props} setActive={setActive} />} />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Location" component={Location} />
            <Tab.Screen name="WeatherDetails" children={props => <WeatherDetails {...props} setActive={setActive} />} options={{ headerTransparent: true }} />
        </Tab.Navigator>
    );
}

export default BottomNavigation;
