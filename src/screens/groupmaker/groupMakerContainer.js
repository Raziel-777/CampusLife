import React, {Component} from 'react';
import GroupMakerView from './groupMakerView';
import {listRepos} from "../../reducers/reducer";
import connect from "react-redux/es/connect/connect";
import Loader from "../../components/loader/loaderView";

class GroupMakerContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {users: props.users, groupMade: null, makeGroup: this.makeGroup.bind(this)};
    }

    componentDidMount() {
        this.props.listRepos();
    }

    static randomItem(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    makeGroup(groupSize, option) {
        this.randomGroup(groupSize, option).then(() => {
            const resultGroup = this.state.groupMade;
            if (this.state.groupMade !== null) {
                this.props.navigation.navigate('ResultGroup', {resultGroup});
            }
        })
    }

    async randomGroup(groupSize, option) {
        const usersList = this.state.users.map((user) => {
            return user;
        });
        const result = [];
        const fullGroupNumber = Math.trunc(this.state.users.length / groupSize);
        if (option === 'parityNo') {
            for (let i = 0; i < fullGroupNumber; i++) {
                const group = [];
                for (let j = 0; j < groupSize; j++) {
                    const randomUser = GroupMakerContainer.randomItem(usersList);
                    group.push(randomUser);
                    usersList.splice(usersList.indexOf(randomUser), 1);
                }
                result.push(group);
            }
            if (usersList.length > 0) {
                result.push(usersList);
            }
            this.setState({groupMade: result});

        } else if (option === 'parityYes') {
            const manGroup = [];
            const womanGroup = [];
            for (const user of usersList) {
                if (user.gender === 'male') {
                    manGroup.push(user);
                } else {
                    womanGroup.push(user);
                }
            }
            let pingPong = 'manGroup';
            for (let i = 0; i < fullGroupNumber; i++) {
                const group = [];
                for (let j = 0; j < groupSize; j++) {
                    if (pingPong === 'manGroup') {
                        if (manGroup.length > 0) {
                            const randomUser = GroupMakerContainer.randomItem(manGroup);
                            group.push(randomUser);
                            manGroup.splice(manGroup.indexOf(randomUser), 1);
                            pingPong = 'womanGroup';
                            continue;
                        } else {
                            pingPong = 'womanGroup';
                            j--;
                            continue;
                        }
                    } else if (pingPong === 'womanGroup') {
                        if (womanGroup.length > 0) {
                            const randomUser = GroupMakerContainer.randomItem(womanGroup);
                            group.push(randomUser);
                            womanGroup.splice(womanGroup.indexOf(randomUser), 1);
                            pingPong = 'manGroup';
                            continue;
                        } else {
                            pingPong = 'manGroup';
                            j--;
                            continue;
                        }
                    }
                }
                result.push(group);
            }
            const lastGroup = womanGroup.concat(manGroup);
            if (lastGroup.length > 0) {
                result.push(lastGroup);
            }
            this.setState({groupMade: result});
        }
    }

    render() {
        if (this.state.isLoading) {
            return (
                <Loader/>
            )
        } else {
            return (
                <GroupMakerView {...this.props} {...this.state}/>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users,
        isLoading: state.loading
    }
};

const mapDispatchToProps = {
    listRepos
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupMakerContainer)
