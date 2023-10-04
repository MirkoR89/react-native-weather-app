import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Shadow } from 'react-native-shadow-2';
import { useDispatch } from "react-redux";
import { fetchDetails } from "../../redux/thunks/fetchData";
import { getBgAndIcon, truncate } from "../../utils/functions";

const WeatherCard = ({ card, navigation }) => {

    const dispatch = useDispatch()
    const bgGradient = getBgAndIcon(card.weather.icon).bgGradient
    const icon = getBgAndIcon(card.weather.icon).icon


    const handleDetails = async () => {
        await dispatch((fetchDetails(card.coord)))
        navigation.navigate('WeatherDetails', { card, bgGradient, icon })
    }

    return (
        <Pressable
            title={card.name}
            onPress={handleDetails}
        >
            <Shadow
                distance={10}
                startColor="rgba(0, 0, 0, 0.17)"
                distanceInfluence={0.5}
                offset={[25, 20]}
            >
                <LinearGradient
                    colors={bgGradient}
                    style={styles.container}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                >
                    <View style={styles.place}>
                        <Text style={{ color: '#FFF', fontFamily: 'Poppins-SemiBold', fontSize: 26, lineHeight: 39 }}>
                            {truncate(card.name, 8)}
                        </Text>
                        <Text style={{ color: '#FFF', fontFamily: 'Poppins-Medium', fontSize: 15, marginBottom: -7 }}>
                            {card.date},
                        </Text>
                        <Text style={{ color: '#FFF', fontFamily: 'Poppins-Medium', fontSize: 15 }}>
                            {card.day}
                        </Text>
                        <Text style={{ color: '#FFF', fontFamily: 'Poppins-Light', fontSize: 12 }}>
                            {`${card.time.split(' ')[0]} ${card.time.split(' ')[0] === 'AM' ? 'a.m.' : 'p.m.'}`}
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
            </Shadow>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 25,
        width: 374,
        height: 140,
        marginVertical: 10,
        margin: 20,
    },
    place: {
        paddingLeft: 20,
    },
    temp: {
        marginTop: 10,
        paddingRight: 20,
    },
})

export default WeatherCard