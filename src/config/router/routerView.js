import React, {Component} from "react";
import {DrawerItems, SafeAreaView} from 'react-navigation';
import {ScrollView, Image, View, Text} from "react-native";
import styles from './routerStyle';

const CustomDrawerContentComponent = (props) => (
    <View style={styles.container} >
        <View style={styles.header}>
            <Image source={require('../../assets/img/logo.png')} style={styles.icon}/>
            <Text style={styles.text}>Campus Life</Text>
        </View>
        <ScrollView>
            <SafeAreaView style={styles.container} forceInset={{top: 'always', horizontal: 'never'}}>
                <DrawerItems {...props} />
            </SafeAreaView>
        </ScrollView>
    </View>
);

export default CustomDrawerContentComponent;