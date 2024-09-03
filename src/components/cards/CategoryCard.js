import {Image, Text, TouchableOpacity, View} from "react-native";


const CategoryCard = ({imgUrl, title}) => {
    return (
        <TouchableOpacity className="relative mr-2">
            <Image
                source={{uri: imgUrl}}
                style={{width: 50, height: 50, margin: 10}}
            />
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}

export default CategoryCard;