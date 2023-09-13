import { useEffect } from "react";
import { Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/thunks/fetchData";
import WeatherCard from "../layout/WeatherCard";

const Home = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchData('lat=48.84702937579571&lon=-2.372074749929499'))
    }, [])

    const data = useSelector(state => state.data);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <WeatherCard />
        </View>
    )
}

export default Home