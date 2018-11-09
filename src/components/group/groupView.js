import React, {Component} from 'react';
import {FlatList, Image, Text, View} from "react-native";


const GroupView = (props) => {
    return (
        <FlatList
            data={props.groupItem}
            renderItem={({item}) =>
                <View style={{padding: 10}}>
                    <Text>{item.firstname}</Text>
                    <Image
                    source={{uri: 'http://192.168.1.23:8000/' + item.imgprofil}}
                    style={{
                        width: '100%',
                        height: 100
                    }} resizeMode='contain'/>
                </View>
            }/>
    )
};

export default GroupView;