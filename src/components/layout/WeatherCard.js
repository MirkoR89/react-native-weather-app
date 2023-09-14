import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useDispatch } from "react-redux";
import { fetchDetails } from "../../redux/thunks/fetchData";
import { getBgAndIcon } from "../../utils/functions";

const WeatherCard = ({ card, navigation }) => {

    const dispatch = useDispatch()
    const bgGradient = getBgAndIcon(card.weather.icon).bgGradient
    const icon = getBgAndIcon(card.weather.icon).icon


    const handleDetails = () => {
        dispatch((fetchDetails(card.coord)))
        navigation.navigate('WeatherDetails', { card, bgGradient, icon })
    }

    return (
        <Pressable
            title={card.name}
            onPress={handleDetails}
        >
            <LinearGradient
                colors={bgGradient}
                style={[styles.container, styles.shadowProp]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
                <View style={styles.place}>
                    <Text style={{ color: '#FFF', fontFamily: 'Poppins-SemiBold', fontSize: 26, lineHeight: 39 }}>
                        {card.name}
                    </Text>
                    <Text style={{ color: '#FFF', fontFamily: 'Poppins-Medium', fontSize: 15, marginBottom: -7 }}>
                        {card.date},
                    </Text>
                    <Text style={{ color: '#FFF', fontFamily: 'Poppins-Medium', fontSize: 15 }}>
                        {card.day}
                    </Text>
                    <Text style={{ color: '#FFF', fontFamily: 'Poppins-Light', fontSize: 12 }}>
                        {card.time}
                    </Text>
                </View>
                <View style={styles.icon}>
                    <Image source={icon} />
                </View>
                <View style={styles.temp}>
                    <Text style={{ color: '#FFF', fontFamily: 'Poppins-Bold', fontSize: 50 }}>
                        {`${card.temp}°`}
                    </Text>
                </View>
            </LinearGradient>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 25,
        backgroundColor: '#FFF',
        width: 374,
        height: 140,
        margin: 10,
        padding: 20,
        elevation: 10,
        shadowColor: 'rgba(0,0,0,0.17)',
    },
    temp: {
        justifyContent: 'center',

    },
    shadowProp: {
        shadowOffset: { width: 50, height: 10 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
    }
})

export default WeatherCard