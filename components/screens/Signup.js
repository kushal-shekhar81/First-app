import React from 'react';
import {View} from 'react-native';
import {Card, Input, Button} from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';

export default SignUp =  ({navigation}) => (
    <View style={{paddingVertical: 30}}>
        <Card>
            <Input label="E-mail" placeholder="Email address" />
            <Input label="Password" placeholder="Enter a password" secureTextEntry />
            <Input label="Confirm Password" placeholder="Re-enter password" secureTextEntry />
            <Button style={{marginTop: 40}} title="Sign Up" />


        </Card>
        <StatusBar style="light" />
    </View>
);