import React, {Component} from 'react';
import {Text, View, Image, ScrollView} from "react-native";
import style from './userDetailsStyle';
import moment from 'moment';

export default class UserDetailsView extends Component {

    constructor(props) {
        super(props);
        this.state = {user: this.props.navigation.state.params.item};
        this.date = this.state.user.created_at;
    }

    render() {
        return (
            <View style={{backgroundColor: 'white', flex: 1, padding: 10}}>
                <View style={{width: '85%'}}>
                    <Text style={style.title}>
                        {this.state.user.firstname}
                    </Text>
                    <Text style={style.title}>
                        {this.state.user.name.toUpperCase()}
                    </Text>
                </View>
                <View
                    style={{marginTop: 20, borderBottomWidth: 2, borderBottomColor: 'teal', paddingBottom: 10}}>
                    <Text>Inscrit depuis le {moment(this.state.user.created_at).format('DD/MM/YY')}</Text>
                </View>
                <View style={{
                    paddingVertical: 20,

                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                    <View style={{width: '50%'}}>
                        <Image
                            source={{
                                uri: 'http://192.168.1.23:8000/' +
                                    this.state.user.imgprofil
                            }}
                            style={{
                                width: '100%',
                                alignSelf: 'flex-end',
                                borderRadius: 50,
                                height: 100,
                            }}
                            resizeMode='contain'/>
                    </View>
                </View>
                <View style={{
                    backgroundColor: '#353b48',
                    borderRadius: 2,
                    padding: 20,
                }}>

                    <ScrollView>
                        <Text style={{color: '#fff'}}>
                            {this.state.user.description}
                        </Text>
                    </ScrollView>
                </View>
            </View>
        )
    }
};