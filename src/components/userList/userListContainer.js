import React, {Component} from 'react';
import UserListView from './userListView';
import {connect} from 'react-redux';
import {listRepos} from "../../reducers/reducer";
import Loader from '../loader/loaderView';


class UserListContainer extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.listRepos();
    }

    render() {
        if (this.props.isLoading) {
            return <Loader/>
        } else {

        }
        return (
            <UserListView {...this.props} users={this.props.users}/>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer)