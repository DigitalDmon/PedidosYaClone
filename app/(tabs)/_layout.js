import {Tabs} from 'expo-router'
import {HomeIcon, OrdersIcon, PromotionsIcon, UserProfile} from '../../src/components/icons'

/* THIS IS A NAVIGATION AT THE BOTTOM OF THE PHONE SCREEN */
export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: 'transparent',
                },
                tabBarActiveTintColor: '#F52F41',
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({color}) => <HomeIcon color={color} />,
                }}
            />
            <Tabs.Screen
                name="promotions/promotions"
                options={{
                    title: "Promotions",
                    tabBarIcon: ({color}) => <PromotionsIcon color={color} />,
                }}
            />
            <Tabs.Screen
                name="orders/orders"
                options={{
                    title: "Orders",
                    tabBarIcon: ({color}) => <OrdersIcon color={color} />,
                }}
            />
            <Tabs.Screen
                name="profile/[id]"
                options={{
                    title: "Profile",
                    tabBarIcon: ({color}) => <UserProfile color={color} />,
                }}
            />
        </Tabs>
    )
}