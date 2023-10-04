import { useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/thunks/fetchData";
import WeatherCard from "../layout/WeatherCard";


const Home = ({ navigation }) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchData('Rome'))
        dispatch(fetchData('New York'))
        dispatch(fetchData('Madrid'))
    }, [])

    const { data } = useSelector(state => state.data);

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View>
                    <Text style={{ ...styles.text, width: 230, }}>
                        Good morning!
                        Mario
                    </Text>
                </View>
                <View style={styles.plus}>
                    <Icon name="pluscircleo" size={30} color="#01175F" />
                    <Text style={{ ...styles.text, fontSize: 20, marginLeft: 10, marginTop: 5 }}>
                        Aggiungi Città
                    </Text>
                </View>
            </View>
            {
                data &&
                <FlatList
                    data={data}
                    renderItem={({ item }) => <WeatherCard card={item} navigation={navigation} />}
                    keyExtractor={(item) => item.name}
                >
                </FlatList>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
        // height: '25%',
    },
    text: {
        color: '#01175F',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 28,
        textAlign: "center"
    },
    plus: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,
        marginBottom: 55

    }
})

export default Home