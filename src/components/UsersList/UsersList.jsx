import React, {Component} from 'react';
import {connect} from 'react-redux';
import {mainActions} from '../../actions/main.action';

class UsersList extends Component {
    componentDidMount(){
        const {getUsers} = this.props;
        getUsers();
    }

    select = (user) => {
        let {selectUser} = this.props;
        const tracker = JSON.parse(localStorage.getItem('tracker'));
        const foundItem = tracker && tracker.filter(item => item.id === user.id);
        let selectedTracks = foundItem && foundItem[0] && foundItem[0].tracks;
        if(selectedTracks === undefined || null){
            selectedTracks = [];
        }
        selectUser(user, selectedTracks);
    };

    render(){
        const {users} = this.props;
        const {select} = this;

        return(
            <div className="container">
                <div className="row">
                    <div className="dropdown" style={{marginTop: '10px'}}>
                        <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Select User
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            {users.map(user => (
                                <button
                                    className="dropdown-item"
                                    type="button"
                                    key={user.id}
                                    onClick={() => select(user)}
                                >{user.name}</button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const connectedUsersList = connect(state => {
    const {users} = state.main;

    return {
        users,
    }
}, {
    getUsers: mainActions.getUsers,
    selectUser: mainActions.selectUser,
})(UsersList);

export default UsersList = connectedUsersList;