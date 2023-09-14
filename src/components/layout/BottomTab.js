import { Image, Pressable, StyleSheet, View } from 'react-native';
import { Shadow } from 'react-native-shadow-2';

const BottomTab = ({ state, navigation, active, setActive }) => {
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
                            <Pressable
                                key={route.key}
                                onPress={onPress}
                                style={{
                                    ...styles.button,
                                    borderBottomWidth: route.name === active ? 2 : 0,
                                    borderBottomColor: route.name === active ? '#01175F' : '#FFF'
                                }}>
                                <View style={styles.icon}>
                                    <Image source={
                                        route.name === 'Home' ? require('../../assets/icons/Home.png') :
                                            route.name === 'Search' ? require('../../assets/icons/Search.png') :
                                                require('../../assets/icons/Location.png')
                                    } />
                                </View>
                            </Pressable>
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
