import React, {Component} from 'react';
import {connect} from 'react-redux';

import './TrackDetails.css';

class TrackDetails extends Component{

    render(){
        const {selectedUser, selectedTracks} = this.props;

        return(
            <section>
                <div className="container">
                    <div className="row">
                        <div className="card" style={{width: '20rem'}}>
                            <div className="card-body">
                                <h5 className="card-title">{selectedUser.name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">
                                    <span className="label">ID: </span>{selectedUser.email}</h6>
                                <h6 className="card-subtitle mb-2 text-muted">
                                    <span className="label">E-mail: </span>{selectedUser.email}</h6>
                            </div>
                        </div>
                    </div>
                    {selectedTracks && selectedTracks.map((item, i) => (
                        <div className="row">
                            <div className="card">
                                <div className="card-body">
                                    <span className="label">Spent hours: </span>{item.hours}h
                                    <span className="label"> Task description: </span>{item.description}h
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        )
    }
}

const connectedTrackDetails = connect(state => {
    const {selectedUser, selectedTracks} = state.main;

    return {
        selectedUser,
        selectedTracks,
    }
}, {

})(TrackDetails);

export default TrackDetails = connectedTrackDetails;