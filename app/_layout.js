import {Stack} from "expo-router";

/* APP MAIN LAYOUT */
const RootLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{
                headerShown: false
            }}/>
        </Stack>
    )
}

export default RootLayout;
