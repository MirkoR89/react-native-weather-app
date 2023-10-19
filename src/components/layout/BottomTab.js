import { useEffect, useState } from 'react';
import { Animated, Dimensions, StyleSheet, TouchableNativeFeedback, View } from 'react-native';
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

    useEffect(() => {
        const index = state.index
        Animated.spring(translateValue, {
            toValue: index * tabWidth,
            velocity: 10,
            useNativeDriver: true,
        }).start()

        if (state.index === 3) {
            setActive('')
        }
    }, [state.index])

    return (
        <>
            <Animated.View
                style={[
                    styles.slider,
                    {
                        transform: [{ translateX: translateValue }],
                        width: tabWidth - 40,
                        marginLeft: 20
                    },
                ]}
            />
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
                                        <Icon name={icons.find(icon => icon.route === route.name).name} size={route.name === active ? 35 : 30} color={route.name === active ? '#01175F' : '#464C64'} />
                                    </View>
                                </View>
                            </TouchableNativeFeedback>
                        );
                    })}
            </View>
        </>
    );
}


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        elevation: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#FFF',
        height: 78,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 7
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
