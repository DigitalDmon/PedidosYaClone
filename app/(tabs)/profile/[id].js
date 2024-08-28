import {Text, View} from "react-native";
import {useLocalSearchParams} from "expo-router";

/* THIS IS A DYNAMIC ROUTE FILE */
const Profile = () => {

    const {id} = useLocalSearchParams()

    return (
        <View>
            <Text>ID: {id}</Text>
        </View>
    )
}

export default Profile;