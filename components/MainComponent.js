import React, {Component} from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Welcome from './Welcome';

const Stack = createStackNavigator();

export default class Main extends Component {
    render() {
        return (
            
            <NavigationContainer theme={DarkTheme}>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen 
                        name="Home" 
                        component={Home} 
                        options={{headerTitleAlign: "center"}} />
                    <Stack.Screen name="Welcome" 
                        component={Welcome} 
                        options={{headerTitleAlign: "center"}} />
                </Stack.Navigator>
            </NavigationContainer>
           
        );
    }
}