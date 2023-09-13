import { Image, StyleSheet, Text, View } from "react-native"
import LinearGradient from "react-native-linear-gradient"

const WeatherCard = ({ card }) => {

    let icon
    let bgGradient

    if (card.weather.icon === '01n') {
        icon = require('../../assets/icons/Sunny.png')
        bgGradient = ['#5374E7', '#77B9F5']
    } else if (card.weather.icon === '03n' || card.weather.icon === '02n') {
        icon = require('../../assets/icons/PartlyCloudyDay.png')
        bgGradient = ['#5374E7', '#77B9F5']
    } else if (card.weather.icon === '03n' ||
        card.weather.icon === '04n') {
        icon = require('../../assets/icons/Cloudy.png')
        bgGradient = ['#464C64', '#99A9B9']
    } else if (card.weather.icon === '09n' || card.weather.icon === '11n') {
        icon = require('../../assets/icons/OccLightRain.png')
        bgGradient = ['#464C64', '#99A9B9']
    } else if (card.weather.icon === '10n') {
        icon = require('../../assets/icons/ModRainSwrsDay.png')
        bgGradient = ['#011354', '#5B9FE3']
    } else {
        icon = require('../../assets/icons/Cloudy.png')
        bgGradient = ['#464C64', '#99A9B9']

    }

    return (
        <LinearGradient
            colors={bgGradient}
            style={[styles.container, styles.shadowProp]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            <View style={styles.place}>
                <Text style={{ color: '#FFF', fontFamily: 'Poppins-SemiBold', fontSize: 26 }}>
                    {card.name}
                </Text>
                <Text style={{ color: '#FFF', fontFamily: 'Poppins-Medium', fontSize: 15 }}>
                    {card.date},
                </Text>
                <Text style={{ color: '#FFF', fontFamily: 'Poppins-Medium', fontSize: 15 }}>
                    {card.day}
                </Text>
                <Text style={{ marginTop: 12, color: '#FFF', fontFamily: 'Poppins-Light', fontSize: 12 }}>
                    {card.time}
                </Text>
            </View>
            <View style={styles.icon}>
                <Image source={icon} />

            </View>
            <View style={styles.temp}>
                <Text style={{ color: '#FFF', fontFamily: 'Poppins-Bold', fontSize: 50 }}>
                    {card.temp}°
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
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
    }
})

export default WeatherCard