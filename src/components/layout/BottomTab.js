import { StyleSheet, TouchableNativeFeedback, View } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import Icon from 'react-native-vector-icons/AntDesign';

const BottomTab = ({ state, navigation, active, setActive }) => {

    const icons = [
        {
            id: 0,
            route: 'Home',
            name: 'home'
        },
        {
            id: 1,
            route: 'Search',
            name: 'search1'
        },
        {
            id: 2,
            route: 'Location',
            name: 'enviromento'
        }
    ]

    return (
        <Shadow
            distance={10}
            startColor="rgba(0, 0, 0, 0.17)"
            distanceInfluence={0.5}
            offset={[20, 30]}
        >
            <View style={styles.container}>
                {
                    state.routes.map((route, index) => {

                        if (route.name === 'WeatherDetails') return

                        const onPress = () => {
                            const event = navigation.emit({
                                type: 'tabPress',
                                target: route.key,
                                canPreventDefault: true,
                            })

                            const isFocused = state.index === index

                            if (!isFocused && !event.defaultPrevented) {
                                navigation.navigate({ name: route.name, merge: true })
                                setActive(route.name)
                            }
                        }
                        return (
                            <TouchableNativeFeedback
                                background={TouchableNativeFeedback.Ripple('#d1d5db', true, 65)}
                                key={route.key}
                                onPress={onPress}
                            >
                                <View style={{
                                    ...styles.button,
                                    borderBottomWidth: route.name === active ? 3 : 0,
                                    borderBottomColor: route.name === active ? '#01175F' : '#FFF'
                                }}>
                                    <View style={styles.icon}>
                                        <Icon name={icons.find(icon => icon.route === route.name).name} size={30} color={route.name === active ? '#01175F' : '#464C64'} />
                                    </View>
                                </View>

                            </TouchableNativeFeedback>
                        );
                    })}
            </View>
        </Shadow>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: 25,
        backgroundColor: '#FFF',
        width: 374,
        height: 78,
        margin: 20,
    },
    button: {
        width: 71,
        height: 78,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default BottomTab;
