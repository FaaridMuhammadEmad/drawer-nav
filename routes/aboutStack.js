import {createStackNavigator} from 'react-navigation-stack'
import About from '../screens/about';
import React from 'react';
import Header from '../shared/header';

const screens = {
    About: {
        screen: About,
        navigationOptions: ({navigation}) => {
            return {
            // title: 'About',
            headerTitle: () => <Header navigation= {navigation} />, //here use headerTitle because title expects a string not a function and here i used an arrow function that returns header component
            // headerStyle: { backgroundColor: '#4544'}
            }
        }
    },
}

const AboutStack = createStackNavigator(screens, 
    {
        defaultNavigationOptions: {
            headerTintColor: '#444',
            headerStyle: { backgroundColor: '#4544', height:60}
        }
    });

export default AboutStack;