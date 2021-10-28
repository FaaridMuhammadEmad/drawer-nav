import {createStackNavigator} from 'react-navigation-stack'
// import {createAppContainer} from 'react-navigation' ////for StackNavigation only
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';
import React from 'react';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({navigation}) => {
            return {
                // title: 'Reviews',
                headerTitle: () => <Header navigation= {navigation} />, //here use headerTitle because title expects a string not a function and here i used an arrow function that returns header component
                // headerStyle: { backgroundColor: '#4544'}
            }
        }
    },

    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Review Details',
            // headerStyle: { backgroundColor: '#4544'}
        }
    }
}

const HomeStack = createStackNavigator(screens, 
    {
        defaultNavigationOptions: {
            headerTintColor: '#444',
            headerStyle: { backgroundColor: '#4544', height:60}

        }
    });

// export default createAppContainer(HomeStack); //for StackNavigation only
export default HomeStack;
