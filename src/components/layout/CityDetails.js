import { useNavigation } from "@react-navigation/native";
import { Dimensions, StyleSheet, Text, TouchableNativeFeedback, View } from "react-native";
import Animated, { FadeInUp, FadeOutDown, } from "react-native-reanimated";
import Icon from "react-native-vector-icons/AntDesign";
import { useDispatch } from "react-redux";
import { fetchDetails } from "../../redux/thunks/fetchData";
import { getBgAndIcon, getDateTime, kelvinToCelsius } from "../../utils/functions";

const CityDetails = ({ item, i, lengthList }) => {

    const dispatch = useDispatch()
    const navigation = useNavigation()

    const hanldeAddCity = async () => {
        const _data = await dispatch((fetchDetails(item.coord)))
        const data = _data.payload

        const bgGradient = getBgAndIcon(data.current.weather[0].icon).bgGradient
        const icon = getBgAndIcon(data.current.weather[0].icon).icon

        const card = {
            name: item.name,
            temp: kelvinToCelsius(data.current.temp).toString(),
            day: getDateTime(data.current.sunrise, data.timezone_offset).day,
            date: getDateTime(data.current.sunrise, data.timezone_offset).date,
            weather: data.current.weather[0]
        }

        navigation.navigate('WeatherDetails', { card, bgGradient, icon, search: 'search' })
    }

    return (
        <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple('#d1d5db')}
            onPress={hanldeAddCity}
        >
            <Animated.View
                entering={FadeInUp.delay(i * 30)}
                exiting={FadeOutDown.delay(i * 30)}
                style={{
                    ...styles.container,
                    borderBottomWidth: i !== lengthList ? 1 : 0,
                    borderBottomLeftRadius: i === lengthList ? 10 : 0,
                    borderBottomRightRadius: i === lengthList ? 10 : 0,
                }}
            >
                <View>
                    <Text style={{ color: '#464C64', fontFamily: 'Poppins-SemiBold', fontSize: 16 }}> {item.name},</Text>
                    <Text style={{ color: '#464C64', fontFamily: 'Poppins-Light', fontSize: 14 }}>{`${item.state || 'not available'} - ${item.country || 'not available'}`}</Text>
                </View>
                <Icon name="pluscircle" size={25} color="#01175F" />
            </Animated.View>
        </TouchableNativeFeedback >
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        width: Dimensions.get("window").width - 40,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderBottomColor: "#E5E5E5"
    },
    content: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    }
})

export default CityDetails