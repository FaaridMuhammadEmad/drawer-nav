import React from 'react'
import { View, Text, Button } from 'react-native'

export default function ReviewDetails({navigation}) {

    const buttonPressHandler = () => {
        navigation.goBack();
    }
    return (
        <View>
            <Text style={{color:'blue', textAlign: 'center', fontWeight:'bold', fontSize:28}}>Review Details screen</Text>
            <Text> </Text>
            <Text>{navigation.getParam('title')}</Text>
            <Text>{navigation.getParam('body')}</Text>
            <Text>{navigation.getParam('rating')}</Text>
            <Text> </Text>
            <Button title='Back to Home' onPress={buttonPressHandler}/>
        </View>
    )
}
