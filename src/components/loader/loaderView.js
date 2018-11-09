import React, {Component} from 'react';
import {ActivityIndicator, View} from "react-native";
import styles from './loaderStyle';

export default class LoaderView extends Component {

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator styles={styles.container} size="large" color="#40739e"/>
            </View>
        )
    }
}

