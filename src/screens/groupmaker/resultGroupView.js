import React, {Component} from 'react';
import {Text, View, FlatList} from "react-native";
import styles from './resultGroupStyle';
import GroupView from '../../components/group/groupView'

export default class UserDetailsView extends Component {

    constructor(props) {
        super(props);
        this.state = {result: this.props.navigation.state.params.resultGroup};
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{alignItems: 'center', marginBottom: 10}}>
                    <Text style={{fontWeight: 'bold', fontSize: 20}}>
                        Groupes
                    </Text>
                </View>
                <FlatList
                    data={this.state.result}
                    renderItem={({group, index}) =>
                        <View style={{padding: 10}}>
                            <Text style={styles.text}>Groupe : {index + 1}</Text>
                            <View>
                                <GroupView groupItem={this.state.result[index]}/>
                            </View>
                        </View>
                    }/>
            </View>
        )
    }
};