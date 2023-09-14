import { Image, StyleSheet, Text, View } from "react-native";
import { getBgAndIcon, getDateTime, kelvinToCelsius } from "../../utils/functions";

const NextDay = ({ item, timezone }) => {

    const icon = getBgAndIcon(item.weather[0].icon).icon

    return (
        <View style={[styles.container, styles.shadowProp]}>
            <Text style={{ color: '#FFF', fontFamily: 'Poppins-SemiBold', fontSize: 22, marginTop: 27.4 }}>{getDateTime(item.sunrise, timezone).day}</Text>
            <Text style={{ color: '#FFF', fontFamily: 'Poppins-SemiBold', fontSize: 36 }}>{`${kelvinToCelsius(item.temp.day)}°`}</Text>
            <View style={styles.imageContainer}>
                <Image style={{ marginBottom: 30 }} source={icon} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 232,
        width: 148,
        borderRadius: 20,
        backgroundColor: 'rgba(255,255,255,0.1)',
        marginRight: 15,
        // elevation: 1,
        // shadowColor: 'rgba(0,0,0,0.17)'
    },
    imageContainer: {
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center'
    }
    // shadowProp: {
    //     shadowOffset: { width: -2, height: 4 },
    //     shadowOpacity: 0.1,
    //     shadowRadius: 3,
    // }
})

export default NextDay