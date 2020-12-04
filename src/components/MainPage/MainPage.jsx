import React, {Component} from 'react';
import {connect} from 'react-redux';
import {mainActions} from '../../actions/main.action';

import UsersList from '../UsersList/UsersList';
import UserInfo from '../UserInfo/UserInfo';

class MainPage extends Component {

    render(){
        const {users, selectedUser} = this.props;

        return (
            <>
                <UsersList/>
                {selectedUser.name && <UserInfo/>}
            </>
        )
    }
}

const connectedMainPage = connect(state => {
    const {users, selectedUser} = state.main;

    return {
        users,
        selectedUser,
    }
}, {
    getUsers: mainActions.getUsers,
})(MainPage);

export default MainPage = connectedMainPage;