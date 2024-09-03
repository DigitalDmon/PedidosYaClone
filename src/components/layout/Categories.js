import {ScrollView, Text} from "react-native";
import CategoryCard from "../cards/CategoryCard";

const Categories = (props) => {
    return (
        <ScrollView
            className="px-8"
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10
            }}
            horizontal={true}
            showsVerticalScrollIndicator={false}
        >
            {/* CATEGORY CARDS */}
            <CategoryCard imgUrl="https://links.papareact.com/wru" title="Testing 1"/>
            <CategoryCard imgUrl="https://links.papareact.com/wru" title="Testing 2" />
            <CategoryCard imgUrl="https://links.papareact.com/wru" title="Testing 3" />
        </ScrollView>
    )
}

export default Categories;