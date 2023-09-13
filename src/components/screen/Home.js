import { useEffect } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/thunks/fetchData";
import WeatherCard from "../layout/WeatherCard";

const Home = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchData('Turin'))
        dispatch(fetchData('London'))
        dispatch(fetchData('Rome'))
    }, [])

    const {data} = useSelector(state => state.data);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View>
                <Text style={styles.text}>
                    Good Morning!
                </Text>
                <Text style={styles.text}>
                    Mario
                </Text>
            </View>
            <View style={styles.plus}>
            <Image source={require('../../assets/icons/Plus.png')} />
                <Text style={{...styles.text, fontSize: 20}}>
                    Aggiungi Città
                </Text>
            </View>
            {
                data.map((card, i) =>
                    <WeatherCard key={i} card={card} />
                    )
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
        justifyContent: 'space-around',
    }
})

export default Home