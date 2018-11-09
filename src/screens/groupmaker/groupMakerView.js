import React, {Component} from 'react';
import {View, ScrollView, Text, TouchableOpacity, Picker} from "react-native";
import styles from './groupMakerStyle';
import NumericInput from 'react-native-numeric-input'

export default class GroupMakerView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            minVal: 2,
            maxVal: Math.round(props.users.length / 2),
            parityOption: 'parityNo',
            groupSize: 2
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{alignItems: 'center', marginBottom: 10}}>
                    <Text style={{fontWeight: 'bold', fontSize: 20}}>
                        Fabrique de groupes
                    </Text>
                </View>
                <View style={styles.container2}>
                    <Text style={{marginBottom: 15}}>Taille des groupes :</Text>
                    <NumericInput
                        initValue={this.state.groupSize}
                        minValue={this.state.minVal}
                        maxValue={this.state.maxVal}
                        value={this.state.groupSize}
                        onChange={(value) => {this.setState({ groupSize: value })}}
                        totalWidth={150}
                        rounded
                        textColor='#103900'
                        iconStyle={{ color: 'white' }}
                        rightButtonBackgroundColor='#0FFF95'
                        leftButtonBackgroundColor='#06BA63'/>
                </View>

                <View style={styles.container2}>
                    <Text>Parité Homme/Femme :</Text>
                    <Picker
                        selectedValue={this.state.parityOption}
                        style={{height: 70, width: '50%'}}
                        onValueChange={(itemValue) => this.setState({parityOption: itemValue})}>
                        <Picker.Item label="NON" value={'parityNo'}/>
                        <Picker.Item label="OUI" value={'parityYes'}/>
                    </Picker>
                </View>

                <View style={styles.container2}>
                    <TouchableOpacity onPress={() => this.props.makeGroup(this.state.groupSize, this.state.parityOption)} style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>
                            GO !
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>

        )
    }
};