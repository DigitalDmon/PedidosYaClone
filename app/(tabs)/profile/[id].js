import {Text, View} from 'react-native'
import {useLocalSearchParams} from 'expo-router'
import {Screen} from '../../../src/components/screens/Screens'

/* THIS IS A DYNAMIC ROUTE FILE */
const Profile = () => {

    const {id} = useLocalSearchParams()

    return (
      <Screen>
        <View className="flex-1 justify-center items-center">
          <Text>ID: {id}</Text>
        </View>
      </Screen>
    )
}

export default Profile;