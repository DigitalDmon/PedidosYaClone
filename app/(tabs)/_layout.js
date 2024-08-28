import {Tabs} from "expo-router";

/* THIS IS A NAVIGATION AT THE BOTTOM OF THE PHONE SCREEN */
const TabsLayout = () => {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{
                title: "Home",
            }}/>
            <Tabs.Screen name="profile/[id]" options={{
                title: "Profile",
            }}/>
        </Tabs>
    )
}

export default TabsLayout;