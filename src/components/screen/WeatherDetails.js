
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const WeatherDetails = ({ route, navigation }) => {

    const { card, bgGradient, icon } = route.params;

    return (
        <LinearGradient
            colors={bgGradient}
            style={[styles.container, styles.shadowProp]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            <View style={styles.textArea}>
                <Pressable onPress={() => navigation.goBack()} >
                    <Image source={require('../../assets/icons/ArrowLeft.png')} />
                </Pressable>
                <Text style={{ color: '#FFF', fontFamily: 'Poppins-SemiBold', fontSize: 32 }}>{card.name}</Text>
                <Image source={require('../../assets/icons/PlusWhite.png')} />
            </View>
            <Text style={{ color: '#FFF', fontFamily: 'Poppins-Medium', fontSize: 20 }}>{`${card.day}, ${card.date}`}</Text>
            <Text style={{ color: '#FFF', fontFamily: 'Poppins-Light', fontSize: 20 }}>{card.weather.main}</Text>
            <View style={styles.tempArea}>
                <Image source={icon} />
                <Text style={{ color: '#FFF', fontFamily: 'Poppins-Bold', fontSize: 110, marginTop: 15, marginLeft: 42 }}>{`${card.temp}°`}</Text>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '100%',
        padding: 20
    },
    textArea: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    tempArea: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default WeatherDetails