import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer'; // Navigator Drawer

// Page Components
import Home from "./pages/Home";
import MyLinks from "./pages/MyLinks";
import { Ionicons } from "@expo/vector-icons"

const Drawer = createDrawerNavigator();

function Routes() {
    return (
        // Coonfigurações da Drawer Navigation
        <Drawer.Navigator
            drawerContentOptions={
                {
                    activeBackgroundColor: '#2ccbb9',
                    activeTintColor: '#FFF',
                    marginTop: 16,
                    labelStyle: {
                        fontSize: 17
                    }
                }
            }
        >
            <Drawer.Screen name="Home" component={Home} options={
                {
                    title: "Encurtar Link",
                    drawerIcon: ({ focused, size, color }) => (
                        <Ionicons
                            name={focused ? 'cube' : 'cube-outline'}
                            color={color}
                            size={size}
                        />
                    ) // Quando usamos parenteses entendemos que queremos renderizar algo
                }
            } />

            <Drawer.Screen name="MyLinks" component={MyLinks} options={
                {
                    title: "My Links",
                    drawerIcon: ({ focused, size, color }) => (
                        <Ionicons
                            name={focused ? 'stats-chart' : 'stats-chart-outline'}
                            color={color}
                            size={size}
                        />
                    ) // Quando usamos parenteses entendemos que queremos renderizar algo
                }
            } />
        </Drawer.Navigator>
    )
}

export default Routes;