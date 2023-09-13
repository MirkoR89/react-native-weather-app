import { View, StyleSheet, Text, Image } from "react-native"
import LinearGradient from "react-native-linear-gradient"


const WeatherCard = () => {
    return (
        <LinearGradient
            colors={['#011354', '#5B9FE3' ]}
            style={[styles.container, styles.shadowProp]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            <View style={styles.place}>
            <Text style={{color: '#FFF', fontFamily: 'Poppins-SemiBold', fontSize: 26}}>
                London
            </Text>
            <Text style={{width: 84, color: '#FFF', fontFamily: 'Poppins-Medium', fontSize: 15}}>
                Friday 18,
                Septeber
            </Text>
            <Text style={{marginTop: 12, color: '#FFF', fontFamily: 'Poppins-Light', fontSize: 12}}>
                2:38 p.m.
            </Text>
            </View>
            <View style={styles.icon}>
            <Image source={require('../../assets/icons/ModRainSwrsDay.png')} />
            {/* {route.name === 'Home' && <Image source={require('../../assets/icons/Home.png')} />}
            {route.name === 'Search' && <Image source={require('../../assets/icons/Search.png')} />}
            {route.name === 'Location' && <Image source={require('../../assets/icons/Location.png')} />} */}
            </View>
            <View style={styles.temp}>
            <Text style={{color: '#FFF', fontFamily: 'Poppins-Bold', fontSize: 50}}>
                18°
            </Text>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: 25,
        backgroundColor: '#FFF',
        width: 374,
        height: 140,
        margin: 20,
        padding: 20,
        elevation: 10,
        shadowColor: 'rgba(0,0,0,0.17)',
    },
    shadowProp: {
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.1,
        shadowRadius: 3,
    }
})

export default WeatherCard