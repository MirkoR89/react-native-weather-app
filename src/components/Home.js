import { useEffect } from "react";
import { Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/thunks/fetchData";

const Home = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchData('lat=48.84702937579571&lon=-2.372074749929499'))
    }, [])

    const data = useSelector(state => state.data);

    console.log(data);

    return (
        <View>
            <Text>Hello, world!</Text>
        </View>
    )
}

export default Home