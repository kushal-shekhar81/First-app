import React, {Component} from 'react';
import { Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './styles';

export default class Home extends Component{

    render() {
        return (
            <View style={styles.container}>
                <Text> Hello world </Text>
                <Button title="Go to welcome page" onPress={() => this.props.navigation.navigate('Welcome')} />
                <StatusBar style="light" />
            </View>
        );
    }
}