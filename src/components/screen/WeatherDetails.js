
import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useSelector } from "react-redux";
import NextDay from "../layout/NextDay";
import TimeLine from "../layout/TimeLine";

const WeatherDetails = ({ route, navigation }) => {

    const { card, bgGradient, icon } = route.params;
    const { details } = useSelector(state => state.data);

    const handleBack = () => {
        navigation.goBack()
    }

    return (
        <LinearGradient
            colors={bgGradient}
            style={styles.container}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            <View style={styles.content}>
                <View style={styles.textArea}>
                    <Pressable onPress={handleBack} >
                        <Image source={require('../../assets/icons/ArrowLeft.png')} />
                    </Pressable>
                    <Text style={{ color: '#FFF', fontFamily: 'Poppins-SemiBold', fontSize: 32 }}>{card.name}</Text>
                    <Image source={require('../../assets/icons/PlusWhite.png')} />
                </View>
                <Text style={{ color: '#FFF', fontFamily: 'Poppins-Medium', fontSize: 20 }}>{`${card.day}, ${card.date}`}</Text>
                <Text style={{ color: '#FFF', fontFamily: 'Poppins-Light', fontSize: 20 }}>{card.weather.main}</Text>
                <View style={styles.tempArea}>
                    <Image source={icon} />
                    <Text style={{ color: '#FFF', fontFamily: 'Poppins-Bold', fontSize: 110, marginLeft: 42 }}>{`${card.temp}°`}</Text>
                </View>
            </View>
            <TimeLine detailsHour={details.hourly} timezone={details.timezone_offset} />
            <ScrollView>
                {
                    details.daily &&
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={details.daily}
                        renderItem={({ item }) => <NextDay item={item} timezone={details.timezone_offset} />}
                        keyExtractor={(item) => item.dt}
                    >
                    </FlatList>
                }
            </ScrollView>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: "space-between",
        height: '100%',
        padding: 20
    },
    content: {
        alignItems: 'center',
        width: '100%',
        // height: '60%',
        // marginTop: 45
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