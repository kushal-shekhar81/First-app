import React from 'react';
import {Text, ScrollView, View, Linking} from 'react-native';
import {Card} from 'react-native-elements';

const sources = [
    {
        key: 1,
        name: "Kushal",
        url: "https://unsplash.com/photos/nysUwAtp9lw"
    },
    {
        key: 2,
        name: "GRAES magazine",
        url: "https://unsplash.com/photos/aMWFu6bt0RY"
    },
    {
        key: 3,
        name: "Mak",
        url: "https://unsplash.com/photos/7DJnoFpVwyc"
    }
];

export default Home = () => (
    <View style={{flex: 1, justifyContent: "center"}}>
        <ScrollView contentContainerStyle={{paddingVertical: 20}}>
            {sources.map(({name, url, key}) => (
                <Card title={`CARD No. ${key}`} image={{uri: url}} key={key}>
                    <Text style={{marginBottom: 10}}>
                        Photo by {name}
                    </Text>
                </Card>
            ))}
        </ScrollView>
    </View>
);