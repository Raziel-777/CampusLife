import React, {Component} from 'react';
import UserList from '../../components/userList/userListContainer';

export default class HomeView extends Component {

    render() {
        return (
            <UserList
                {...this.props}
                {...this.state}/>
        )
    }
};


