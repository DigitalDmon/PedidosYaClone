import {StyleSheet, Image, Text, TouchableOpacity} from "react-native";

const CategoryCard = ({imgUrl, title}) => {
    return (
        <TouchableOpacity className="p-2">
            <Image
                source={{uri: imgUrl}}
                style={styles.image}
            />
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CategoryCard;

const styles = StyleSheet.create({
    image: {width: 75, height: 75, margin: 2, resizeMode: 'cover', borderRadius: 10},
    text: {color: '#F52F41', fontSize: 16, alignSelf: 'center'},
})