import {Stack} from "expo-router";

/* APP MAIN LAYOUT */
const RootLayout = () => {

    return (
        /* STACK IS THE HEADER ON THE APP */
        <Stack screenOptions={{
            headerShown: false,
        }}>
        </Stack>
    )
}

export default RootLayout;
