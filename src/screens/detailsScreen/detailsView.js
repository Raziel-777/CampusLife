import React, {Component} from 'react';
import UserDetailsContainer from '../../components/userDetails/userDetailsView';

export default class DetailsView extends Component {

    render() {
        return (
            <UserDetailsContainer
                {...this.props}
                {...this.state}/>
        )
    }
};
