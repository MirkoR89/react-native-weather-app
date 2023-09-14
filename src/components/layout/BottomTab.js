import { Image, Pressable, StyleSheet, View } from 'react-native';

const BottomTab = ({ state, navigation, active, setActive }) => {
    return (
        <View style={[styles.container, styles.shadowProp]}>
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
        elevation: 50,
        shadowColor: 'rgba(0,0,0,0.17)',
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
    },
    shadowProp: {
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
})

export default BottomTab;
