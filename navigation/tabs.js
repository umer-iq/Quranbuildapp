import React ,{useState} from "react";
import {
    Image
} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/";
import { icons, COLORS } from "../constants";
import Quran from "../screens/Quran";
import { Badge } from 'react-native-elements';
const Tab = createBottomTabNavigator();

const tabOptions = {
    showLabel: false,
    style: {
        height: "10%",
        backgroundColor: 'transparent'
    }
}

const Tabs = () => {
    const [badgeCount, setBadgeCount] = useState(0);

    return (
        <Tab.Navigator
            tabBarOptions={tabOptions}
            screenOptions={({ route }) => ({ tabBarActiveBackgroundColor:"#282C35",tabBarInactiveBackgroundColor:"#282C35",
                tabBarIcon: ({ focused }) => {
                    const tintColor = focused ? COLORS.lightGray : COLORS.white;
                
                    switch (route.name) {
                        case "Home":
                            return (
                                <Image
                                    source={icons.homepage}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            )

                        // case "Search":
                        //     return (
                        //         <Image
                        //             source={icons.search_icon}
                        //             resizeMode="contain"
                        //             style={{
                        //                 tintColor: tintColor,
                        //                 width: 25,
                        //                 height: 25
                        //             }}
                        //         />
                        //     )

                        case "Notification":
                            return (
                              
                                <Image
                                    source={icons.notification_icon}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                               
                            )

                        // case "Setting":
                        //     return (
                        //         <Image
                        //             source={icons.menu_icon}
                        //             resizeMode="contain"
                        //             style={{
                        //                 tintColor: tintColor,
                        //                 width: 25,
                        //                 height: 25
                        //             }}
                        //         />
                        //     )
                    }
                }
            })}
        >
            <Tab.Screen
                name="Home"
                component={Home}
            />
            {/* <Tab.Screen
                name="Search"
                component={Home}
            /> */}
            <Tab.Screen
                name="Notification"
                component={Quran
                }
            />
            {/* <Tab.Screen
                name="Setting"
                component={Home}
            /> */}
        </Tab.Navigator>
    )
}

export default Tabs;