import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { getHours, kelvinToCelsius } from '../../utils/functions';

const DetailsHour = ({ item, timezone }) => {

    return (
        <View style={styles.dotsContainer}>
            <Text style={{ color: '#FFF', fontFamily: 'Poppins-Light', fontSize: 12 }}>{getHours(item.dt, timezone)}</Text>
            <View style={styles.dots} />
            <Text style={{ color: '#FFF', fontFamily: 'Poppins-Light', fontSize: 20, marginLeft: 10, }}>{`${kelvinToCelsius(item.temp)}°`}</Text>
        </View>
    )
}

const TimeLine = ({ detailsHour, timezone }) => {

    return (
        <View style={styles.container}>
            <ScrollView horizontal={false}>
                <View style={styles.bDotContainer}>
                    <Text style={{ color: '#FFF', fontFamily: 'Poppins-Bold', fontSize: 18, marginLeft: -7 }}>Now</Text>
                    {/* Dot */}
                    <View style={styles.bDot} />
                    <Text style={{ color: '#FFF', fontFamily: 'Poppins-Bold', fontSize: 25, marginLeft: -5 }}>{`${detailsHour ? kelvinToCelsius(detailsHour[0].temp) : 22}°`}</Text>
                </View>
                {/* Line */}
                <LinearGradient
                    style={styles.line}
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }}
                    locations={[0.5, 0.9]}
                    colors={['#FFF', 'rgba(255,255,255,0.17)']}
                />
                <View style={styles.dotsLoop}>
                    {
                        detailsHour &&
                        <FlatList
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={detailsHour.filter((item, i) => i % 2 !== 0)}
                            renderItem={({ item }) => (<DetailsHour item={item} timezone={timezone} />)}
                            keyExtractor={(item) => item.dt}
                        >
                        </FlatList>
                    }
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 120,
        marginBottom: 15,
        flexDirection: 'row',
        position: 'relative',
        paddingRight: -30,
    },
    bDotContainer: {
        paddingLeft: 25,
    },
    bDot: {
        width: 25,
        height: 25,
        borderRadius: 50,
        backgroundColor: '#FFF',
        marginVertical: 10
    },
    dotsLoop: {
        position: 'absolute',
        left: 50,
        top: 7
    },
    dotsContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 25
    },
    dots: {
        width: 15,
        height: 15,
        borderRadius: 50,
        backgroundColor: '#FFF',
        marginVertical: 20
    },
    line: {
        position: 'absolute',
        top: 52,
        left: 25,
        width: '100%',
        height: 4,
    },

})

export default TimeLine