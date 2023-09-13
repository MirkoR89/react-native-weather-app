import { useEffect } from "react";
import { Text, View, StyleSheet, Image, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/thunks/fetchData";
import WeatherCard from "../layout/WeatherCard";

const Home = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchData('Paris'))
        dispatch(fetchData('London'))
        dispatch(fetchData('Rome'))
    }, [])

    const {data} = useSelector(state => state.data);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View>
                <Text style={{...styles.text, width: 215, }}>
                    Good Morning!
                    Mario
                </Text>
            </View>
            <View style={styles.plus}>
            <Image source={require('../../assets/icons/Plus.png')} />
                <Text style={{...styles.text, fontSize: 20, marginLeft: 10 }}>
                    Aggiungi Città
                </Text>
            </View>
            {
                data &&
            <FlatList
            data={data}
            renderItem={({ item }) => <WeatherCard card={item} />}
            keyExtractor={(item) => item.name}
            >
            </FlatList>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#01175F',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 28,
        textAlign:"center"
    },
    plus: {
        flexDirection:"row",
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 25
    }
})

export default Home