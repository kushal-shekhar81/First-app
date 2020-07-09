import React, {Component} from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {Form, Input, Item, Container, Header, Content} from 'native-base';
import styles from './styles';

export default class Home extends Component{

    constructor(props) {
        super(props);

        this.state = {
            name: ""
        };

        this.onInput = this.onInput.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onInput(text) {
        this.setState({name: text});
    }

    onSubmit() {
        this.props.navigation.navigate('Welcome',{name: this.state.name});
        this.setState({name: ""});
    }

    render() {
        return (
            <View style={styles.container}>
                <Text> Hello world </Text>
                <TextInput textContentType="name" onChangeText={(text) => this.onInput(text)} 
                    placeholder="Enter your name" textAlignVertical="center"
                    onSubmitEditing={() => this.setState({name: ""})} 
                    style={{margin: 20, width: 250}} />

                <Button title="Go to welcome page" onPress={() => this.onSubmit()} />
                <StatusBar style="light" />
            </View>
        );
    }
}