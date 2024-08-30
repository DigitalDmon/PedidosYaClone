import {Pressable, Text, View, StyleSheet} from "react-native";
/*import {Link, router} from "expo-router";*/

/* THIS IS A NAVIGATION WITH LINKING ROUTES */
const HomePage = () => {
    return (
        <View style={styles.container}>
            <Text>Home Page</Text>
            {/*<Link href="/profile/1">Go to user 1</Link>
            <Pressable onPress={() => router.push("/profile/2")}>
                <Text>Go to user 2</Text>
            </Pressable>*/}
        </View>
    )
}

export default HomePage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})