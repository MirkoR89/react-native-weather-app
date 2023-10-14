import { useState } from 'react';
import { Animated, Dimensions, StyleSheet, TouchableNativeFeedback, View } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import Icon from 'react-native-vector-icons/AntDesign';

const BottomTab = ({ state, navigation, active, setActive }) => {


    const totalWidth = Dimensions.get("window").width - 40
    const tabWidth = (totalWidth / (state.routes.length - 1))
    const [translateValue] = useState(new Animated.Value(0));
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
        <>
            <Animated.View
                style={[
                    styles.slider,
                    {
                        transform: [{ translateX: translateValue }],
                        width: tabWidth,
                    },
                ]}
            />
            <Shadow
                distance={10}
                startColor="rgba(0, 0, 0, 0.17)"
                distanceInfluence={0.5}
                offset={[30, 30]}
            >
                <View style={{ ...styles.container, width: totalWidth }}>
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

                                Animated.spring(translateValue, {
                                    toValue: index * tabWidth,
                                    velocity: 10,
                                    useNativeDriver: true,
                                }).start();
                            }
                            return (
                                <TouchableNativeFeedback
                                    background={TouchableNativeFeedback.Ripple('#d1d5db', true, 65)}
                                    key={route.key}
                                    onPress={onPress}
                                >

                                    <View style={styles.button}>
                                        <View style={styles.icon}>
                                            <Icon name={icons.find(icon => icon.route === route.name).name} size={30} color={route.name === active ? '#01175F' : '#464C64'} />
                                        </View>
                                    </View>

                                </TouchableNativeFeedback>
                            );
                        })}
                </View>
            </Shadow>
        </>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: 25,
        backgroundColor: '#FFF',
        height: 78,
        borderRadius: 10,
        margin: 20,
    },
    slider: {
        height: 3,
        zIndex: 10,
        position: "absolute",
        bottom: 20,
        left: 20,
        backgroundColor: '#01175F',
        borderRadius: 10,
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
