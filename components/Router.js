import React, {Component} from 'react';
import { Platform, StatusBar } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Profile from './screens/Profile';

const Tab = createBottomTabNavigator();


function Router() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Home" tabBarOptions={{
                    tabStyle: {height: Platform.OS === "android"? (StatusBar.currentHeight*2):0},
                    iconStyle: {marginTop: 15},
                    labelStyle: {paddingTop: 5, marginTop: 5, marginBottom: 20} ,
                    activeTintColor: '#e91e63',
                    labelPosition: "below-icon"}}>
                <Tab.Screen name="Home" component={Home} 
                    options={{tabBarIcon: ({tintColor}) => (<FontAwesome5 name={'home'} size={20} color={tintColor} solid />)}}  />
                <Tab.Screen name="Profile" component={Profile}
                    options={{tabBarIcon: ({ tintColor }) => (
                        <FontAwesome5 name="user" size={20} color={tintColor} />
                      )}} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Router;