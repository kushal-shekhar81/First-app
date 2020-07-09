import React from 'react';
import {View, Text} from 'react-native';
import {Card, Input, Button} from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import styles from '../styles';

export default SignIn = ({navigation}) => (
    <View style={{paddingVertical: 30}}>
        <Card>
            <Input label="Email-id" placeholder="Enter your email id" />
            <Input label="Password" placeholder="Enter your password" secureTextEntry />

            <Button title="Sign In" style={{padding: 20}} />
            <Text></Text>
            <Button buttonStyle={{backgroundColor: "transparent"}} titleStyle={{color: "#bcbec1"}} title="Sign Up" onPress={() => navigation.navigate('Sign Up')} />
        </Card>
    </View>
);