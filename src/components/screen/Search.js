
import { FlatList, StyleSheet, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { useDispatch, useSelector } from "react-redux";
import { clearSearchBar } from "../../redux/slices/dataSlice";
import { fetchCitiesList } from "../../redux/thunks/fetchData";
import CityDetails from "../layout/CityDetails";


const Search = () => {

    const dispatch = useDispatch()
    const { citiesList } = useSelector(state => state.data);
    const { data } = useSelector(state => state.data);

    const handleSearch = text => {
        if (text.length === 0) return dispatch(clearSearchBar())
        else if (text.length < 3) return
        return dispatch(fetchCitiesList(text))
    }


    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Search a city"
                onChangeText={text => handleSearch(text)}
                style={{
                    ...styles.input, borderBottomLeftRadius: citiesList.length ? 0 : 10,
                    borderBottomRightRadius: citiesList.length ? 0 : 10,
                }}
            />
            <View style={styles.icon}>
                <Icon name="search1" size={25} color="#464C64" />
            </View>
            {
                // citiesList.length &&
                <FlatList
                    data={citiesList}
                    renderItem={({ item, index }) => <CityDetails item={item} i={index} lengthList={citiesList.length - 1} data={data} />}
                    keyExtractor={(city, i) => i}
                >
                </FlatList>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 100
    },
    input: {
        position: "relative",
        alignSelf: "stretch",
        marginHorizontal: 20,
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: "#FFF",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        fontFamily: 'Poppins-Medium',
        fontSize: 16,

    },
    icon: {
        position: "absolute",
        right: 40,
        top: 16
    }
})

export default Search