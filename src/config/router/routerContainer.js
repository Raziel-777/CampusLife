import React, {Component} from "react";
import {createDrawerNavigator, createStackNavigator, DrawerActions, NavigationActions} from 'react-navigation';
import {Image, TouchableOpacity, View} from "react-native";
import DrawerView from './routerView';
import HomeContainer from "../../screens/homeScreen/homeView";
import DetailsContainer from "../../screens/detailsScreen/detailsView";
import GroupMakerContainer from "../../screens/groupmaker";
import ResultGroupContainer from '../../screens/groupmaker/resultGroupView';

const drawerNavigationOptions = ({navigation}) => ({
    title: 'Campus Life',
    headerLeft:
        <TouchableOpacity onPress={() => {
            navigation.dispatch(DrawerActions.toggleDrawer())
        }}>
            <View>
                <Image source={require('../../assets/img/whiteMenu.png')}
                       style={{
                           width: 40,
                           height: 40
                       }} resizeMode='contain'/>
            </View>
        </TouchableOpacity>,
    headerStyle: {
        backgroundColor: '#333',

    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        color: '#FF50A8',
        textAlign: 'center',
        marginRight: '20%',
        flex: 1

    }
});

const detailsStackNavigationOptions = ({navigation}) => ({
    title: `${navigation.state.params.item.firstname}`,
    headerLeft:
        <TouchableOpacity onPress={() => {
            navigation.dispatch(NavigationActions.back())
        }}>
            <View>
                <Image source={require('../../assets/img/leftArrow.png')}
                       style={{
                           width: 40,
                           height: 40
                       }} resizeMode='contain'/>
            </View>
        </TouchableOpacity>,
    headerStyle: {
        backgroundColor: '#333',

    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        color: '#FF50A8',
        textAlign: 'center',
        marginRight: '20%',
        flex: 1

    }
});

const resultStackNavigationOptions = ({navigation}) => ({
    title: 'Résultat',
    headerLeft:
        <TouchableOpacity onPress={() => {
            navigation.dispatch(NavigationActions.back())
        }}>
            <View>
                <Image source={require('../../assets/img/leftArrow.png')}
                       style={{
                           width: 40,
                           height: 40
                       }} resizeMode='contain'/>
            </View>
        </TouchableOpacity>,
    headerStyle: {
        backgroundColor: '#333',

    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        color: '#FF50A8',
        textAlign: 'center',
        marginRight: '20%',
        flex: 1

    }
});

const DrawerNavigator = createDrawerNavigator(
    {
        Home: {
            screen: HomeContainer,
        },
        GroupMaker: {
            screen: GroupMakerContainer
        }

    },
    {
        initialRouteName: 'Home',
        contentComponent: (props) => (DrawerView(props))
    });

const RouteContainer = createStackNavigator(
    {
        DrawerNavigator: {
            screen: DrawerNavigator,
            navigationOptions: drawerNavigationOptions
        },
        Details: {
            screen: DetailsContainer,
            navigationOptions: detailsStackNavigationOptions
        },
        ResultGroup: {
            screen: ResultGroupContainer,
            navigationOptions: resultStackNavigationOptions
        }
    });

export default RouteContainer;