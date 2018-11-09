import React, {Component} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import styles from "./userListStyle";


const UserListView = (props) => {

        return (
            <View style={styles.container}>
                <View style={{alignItems: 'center', marginBottom: 10}}>
                    <Text style={{fontWeight: 'bold', fontSize: 20}}>
                        Les étudiants
                    </Text>
                </View>
                <FlatList
                    data={props.users}
                    renderItem={({item}) =>
                        <View style={{padding: 10}}>
                            <View>
                                <TouchableOpacity style={{
                                    backgroundColor: '#353b48',
                                    borderColor: 'teal',
                                    borderRadius: 3,
                                    padding: 5
                                }}
                                                  onPress={() => {
                                                      props.navigation.navigate('Details', {item});
                                                  }}
                                >
                                    <View style={{flexDirection: 'column'}}>
                                        <View style={{
                                            flexDirection: 'row',
                                            borderBottomColor: 'white',
                                            borderBottomWidth: 1,
                                            borderRadius: 2,
                                        }}>
                                            <View style={{
                                                width: '40%'
                                            }}>
                                                <Image
                                                    source={{uri: 'http://192.168.1.23:8000/' + item.imgprofil}}
                                                    style={{
                                                        width: '100%',
                                                        height: 100
                                                    }} resizeMode='contain'/>

                                            </View>
                                            <View style={{
                                                flexDirection: 'column',
                                                paddingHorizontal: 10,
                                                width: '60%'
                                            }}>

                                                <View>
                                                    <Text style={{
                                                        fontWeight: 'bold',
                                                        color: 'white',
                                                        fontSize: 15
                                                    }}>
                                                        {item.firstname}
                                                    </Text>
                                                </View>
                                                <View style={{
                                                    maxHeight: 10,
                                                }}>
                                                    <Text style={{
                                                        color: 'white',
                                                        fontSize: 15
                                                    }}>
                                                        {item.description}
                                                    </Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>

                        </View>
                    }/>
            </View>
        )
    }
;

export default UserListView;