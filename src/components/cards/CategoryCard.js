import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native'

export default function CategoryCard({imgUrl, title}) {
    return (
      <TouchableOpacity className="pl-3 pt-3 items-center">
            <Image
                source={{uri: imgUrl}}
                style={styles.image}
            />
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  image: {width: 115, height: 115, resizeMode: 'cover', borderRadius: 8},
  text: {color: '#000000', fontSize: 12, alignSelf: 'flex-start', fontWeight: 'bold'}
})