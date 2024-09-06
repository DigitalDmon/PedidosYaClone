import {Text, View, Pressable, TextInput, ScrollView} from "react-native";
import {SafeAreaProvider, SafeAreaView, useSafeAreaInsets} from "react-native-safe-area-context";
import {BellsIcon, DownIcon, SearchIcon, UpIcon, ShoppingCartIcon} from "../../src/components/icons";
import {useState} from "react";
import Categories from "../../src/components/layout/Categories";
import FeaturedRow from "../../src/components/layout/FeaturedRow";

/* THIS IS A NAVIGATION WITH LINKING ROUTES */
const HomePage = () => {

    const [isDown, setIsDown] = useState(true);

    const handlePress = () => {
        setIsDown(!isDown);
    }

    const insets = useSafeAreaInsets();

    return (
        <SafeAreaProvider style={{paddingBottom: 80}}>
            <SafeAreaView>

                {/* HEADER */}
                <View className="flex-row justify-between px-4">

                    {/* LOCATION SECTION */}
                    <Pressable onPress={handlePress} className="flex-row items-center">
                        <Text className="text-base">Current Location</Text>
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

                {/* SEARCH INPUT */}
                <View className="px-6 pt-4 flex-row justify-center items-center">

                    {/* SEARCH ICON */}
                    <SearchIcon />

                    {/* INPUT TEXT */}
                    <TextInput
                        className="h-10 w-full p-4 ml-1 text-sm border rounded-2xl"
                        placeholder="Restaurants, products, dishes"
                        placeholderTextColor="#F52F41"
                        keyboardType="default"
                    >
                    </TextInput>
                </View>

                {/* BODY  */}
                <ScrollView showsVerticalScrollIndicator={false}>

                    {/* CATEGORIES */}
                    <View>
                        <Categories />
                    </View>

                    {/* FEATURED ROWS */}
                    <View className="pb-2">
                        <FeaturedRow
                            /* PROPS */
                            id="123"
                            title="Featured"
                            description="Paid placements from our partnerts"
                        />
                        <FeaturedRow
                            /* PROPS */
                            id="1234"
                            title="Tasty Discounts"
                            description="Everyone's been enjoying these juicy discounts!"
                        />
                        <FeaturedRow
                            /* PROPS */
                            id="12345"
                            title="Offers near you!"
                            description="Why not support your local restaurant tonight!"
                        />
                    </View>

                </ScrollView>

            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default HomePage;