import React, {Component} from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './screens/SignIn';
import SignUp from './screens/Signup';


const Stack = createStackNavigator();

export default class Main extends Component {
    render() {
        return (
            
            <NavigationContainer theme={DarkTheme}>
                <Stack.Navigator initialRouteName="Sign In">
                    <Stack.Screen 
                        name="Sign In" 
                        component={SignIn} 
                        options={{headerTitleAlign: "center"}} />
                    <Stack.Screen name="Sign Up" 
                        component={SignUp} 
                        options={{headerTitleAlign: "center"}} />
                </Stack.Navigator>
            </NavigationContainer>
           
        );
    }
}