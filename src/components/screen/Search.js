
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { useDispatch, useSelector } from "react-redux";
import { clearSearchBar } from "../../redux/slices/dataSlice";
import { fetchCitiesList } from "../../redux/thunks/fetchData";
import CityDetails from "../layout/CityDetails";


const Search = ({ navigation }) => {

    const dispatch = useDispatch()
    const { citiesList } = useSelector(state => state.data);
    const { data } = useSelector(state => state.data);
    const [value, setValue] = useState('')

    const handleSearch = text => {
        setValue(text)
        if (text.length === 0) return dispatch(clearSearchBar())
        else if (text.length < 3) return
        return dispatch(fetchCitiesList(text))
    }

    useEffect(() => {
        const unsubscribe = navigation.addListener('blur', () => {
            setValue('');
            dispatch(clearSearchBar())
        })
        return unsubscribe
    }, [navigation])



    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Search a city"
                placeholderTextColor="#AAA"
                onChangeText={text => handleSearch(text)}
                value={value}
                style={{
                    ...styles.input,
                    borderBottomLeftRadius: citiesList.length ? 0 : 10,
                    borderBottomRightRadius: citiesList.length ? 0 : 10,
                    fontFamily: value ? 'Poppins-Medium' : 'Poppins-Light',
                }}
            />
            <View style={styles.icon}>
                <Icon name="search1" size={25} color="#464C64" />
            </View>
            {
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
        color: '#464C64',
        position: "relative",
        alignSelf: "stretch",
        marginHorizontal: 20,
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: "#FFF",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        fontSize: 16,

    },
    icon: {
        position: "absolute",
        right: 40,
        top: 16
    }
})

export default Search