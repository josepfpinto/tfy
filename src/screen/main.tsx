import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { PropsMain, RootTabParamList } from '../types';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Collection from "./collection";
import Home from "./home";

const Tab = createBottomTabNavigator();
const RootTab = createBottomTabNavigator<RootTabParamList>();

const Main = ({ route, navigation }: PropsMain) => {
    return (
        <RootTab.Navigator>
            <RootTab.Screen name="Home" component={Home} />
            <RootTab.Screen name="Collection" component={Collection} />
        </RootTab.Navigator>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Main;