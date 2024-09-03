import {Text, View, StyleSheet, Pressable, TextInput, ScrollView} from "react-native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {BellsIcon, DownIcon, FilterIcon, SearchIcon, UpIcon, ShoppingCartIcon} from "../../src/components/icons";
import {useState} from "react";

/* THIS IS A NAVIGATION WITH LINKING ROUTES */
const HomePage = () => {

    const [isDown, setIsDown] = useState(true);

    const handlePress = () => {
        setIsDown(!isDown);
    }

    return (
        <SafeAreaProvider>
            <SafeAreaView>

                {/* HEADER */}
                <View className="flex-row justify-between px-5">
                    {/* LOCATION SECTION */}
                    <Pressable onPress={handlePress} className="flex-row items-center">
                        <Text className="text-base p-1">Current Location</Text>
                        {isDown ? <DownIcon /> : <UpIcon />}
                    </Pressable>
                    {/* SHOPPING CART AND NOTIFICATION SECTION */}
                    <View className="flex-row">
                        <View className="mr-3">
                            <ShoppingCartIcon />
                        </View>
                        <View className="ml-3">
                            <BellsIcon />
                        </View>
                    </View>
                </View>

                {/* BODY */}
                <ScrollView>
                    {/* SEARCH INPUT */}
                    <View className="px-8 py-2 flex-row justify-center items-center">
                        {/* SEARCH ICON */}
                        <SearchIcon />
                        {/* INPUT TEXT */}
                        <TextInput
                            className="h-10 w-full p-2 ml-1 text-sm border rounded-2xl"
                            placeholder="Restaurants, products, dishes"
                            placeholderTextColor="#F52F41"
                            keyboardType="default"
                        >
                        </TextInput>
                        {/*<FilterIcon />*/}
                    </View>

                    {/* CATEGORIES */}
                    <View>

                    </View>
                </ScrollView>

            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default HomePage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    }
})