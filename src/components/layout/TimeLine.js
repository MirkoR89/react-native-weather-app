import { FlatList, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { getHours, kelvinToCelsius } from '../../utils/functions';

const DetailsHour = ({ item, timezone }) => {

    return (
        <View style={{ ...styles.dotsContainer, marginLeft: 25 }}>
            <Text style={{ color: '#FFF', fontFamily: 'Poppins-Light', fontSize: 12 }}>{getHours(item.dt, timezone)}</Text>
            <View style={{ ...styles.dot, width: 15, height: 15 }} />
            <Text style={{ color: '#FFF', fontFamily: 'Poppins-Light', fontSize: 20, marginLeft: 10 }}>{`${kelvinToCelsius(item.temp)}°`}</Text>
        </View>
    )
}

const TimeLine = ({ detailsHour, timezone }) => {

    return (
        <View style={styles.container}>
            <View style={styles.dotsContainer}>
                <Text style={{ color: '#FFF', fontFamily: 'Poppins-Bold', fontSize: 18 }}>Now</Text>
                {/* Dot */}
                <View style={styles.dot} />
                <Text style={{ color: '#FFF', fontFamily: 'Poppins-Bold', fontSize: 25 }}>{`${detailsHour ? kelvinToCelsius(detailsHour[0].temp) : 22}°`}</Text>
            </View>
            {/* Line */}
            <LinearGradient
                style={styles.line}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                locations={[0.5, 0.9]}
                colors={['#FFF', 'rgba(255,255,255,0.17)']}
            />
            <View style={{ position: 'absolute', left: 30 }}>
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
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 120,
        marginLeft: 40,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dotsContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    dot: {
        width: 25,
        height: 25,
        borderRadius: 50,
        backgroundColor: '#FFF',
    },
    line: {
        alignItems: 'center',
        width: '100%',
        height: 4,
        marginBottom: 13,
        marginLeft: -25
    },

})

export default TimeLine