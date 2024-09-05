import {ScrollView, Text, View} from "react-native";
import {ArrowRightIcon} from "../icons";
import RestaurantCard from "../cards/RestaurantCard";

const imgLink = "https://links.papareact.com/gn7"

const FeaturedRow = ({title, description}) => {
    return (
        /* SPECIAL CARDS */
        <View className="px-4">

            {/* HEADER CARDS */}
            <View className="mt-4 flex-row items-center justify-between">
                <Text className="font-bold text-2xl">{title}</Text>
                <ArrowRightIcon />
            </View>
            <Text className="text-xs text-gray-500">{description}</Text>

            {/* HORIZONTAL SCROLL CARDS */}
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                }}
                className="pt-4"
            >
                {/* RESTAURANT CARDS */}
                <RestaurantCard
                    id={123}
                    imgUrl={imgLink}
                    title="Yo! Sushi"
                    rating={4.5}
                    genre="Japanese"
                    address="Av. Omar Torrijos 157-43"
                    short_description="This is a Test description"
                    dishes={[]}
                    long={20}
                    lat={0}
                />

            </ScrollView>

        </View>
    )
}

export default FeaturedRow;