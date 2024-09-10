import {StyleSheet, Image, Text, TouchableOpacity, Linking} from 'react-native'

const CategoryCard = ({imgUrl, title}) => {
    return (
        <TouchableOpacity className="p-3 items-center" >
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
    image: {width: 100, height: 100, margin: 2, resizeMode: 'cover', borderRadius: 10},
    text: {color: '#F52F41', fontSize: 16, alignSelf: 'center'},
})