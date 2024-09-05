import {ScrollView} from "react-native";
import CategoryCard from "../cards/CategoryCard";

const imgLink = "https://links.papareact.com/gn7"

const Categories = () => {
    return (
        <ScrollView
            contentContainerStyle={{
                paddingHorizontal: 4,
                paddingTop: 10
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        >
            {/* CATEGORY CARDS */}
            <CategoryCard imgUrl={imgLink} title="Testing 1"/>
            <CategoryCard imgUrl={imgLink} title="Testing 2" />
            <CategoryCard imgUrl={imgLink} title="Testing 3" />
            <CategoryCard imgUrl={imgLink} title="Testing 4"/>
            <CategoryCard imgUrl={imgLink} title="Testing 5" />
            <CategoryCard imgUrl={imgLink} title="Testing 6" />
        </ScrollView>
    )
}

export default Categories;