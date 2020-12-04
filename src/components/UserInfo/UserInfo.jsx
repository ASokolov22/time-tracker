import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {mainActions} from '../../actions/main.action';

import './UserInfo.css';

class UserInfo extends Component {

    changeInput = (e) => {
        const {id, value} = e.target;
        const {changeInputValue} = this.props;

        changeInputValue(id, value);
    };

    submit = (e) => {
        e.preventDefault();
        let {selectedUser, hours, description, submitTracker, selectedTracks} = this.props;
        const tracker = JSON.parse(localStorage.getItem('tracker'));
        const foundItem = tracker && tracker.filter(item => item.id === selectedUser.id);
        const foundIndex = tracker && tracker.findIndex(item => item.id === selectedUser.id);
        if(selectedTracks === null){
            selectedTracks = []
        }
        if(!tracker){
            let res = [{
                id: selectedUser.id,
                tracks: [{
                    hours,
                    description
                }]
            }];
            localStorage.setItem('tracker', JSON.stringify(res));
            selectedTracks.push({hours, description});
            submitTracker(selectedTracks);
        } else if(foundItem.length) {
            tracker[foundIndex] = {
                ...tracker[foundIndex],
                tracks: [
                    ...tracker[foundIndex].tracks,
                    {
                        hours,
                        description
                    }
                ]
            };
            localStorage.setItem('tracker', JSON.stringify(tracker));
            selectedTracks.push({hours, description});
            submitTracker(selectedTracks);
        } else {
            let res = [
                ...tracker,
                {
                    id: selectedUser.id,
                    tracks: [{
                        hours,
                        description
                    }]
                }
            ];
            localStorage.setItem('tracker', JSON.stringify(res));
            selectedTracks.push({hours, description});
            submitTracker(selectedTracks);
        }
    };

    deleteTrack = (id, index) => {
        const {removeTrack} = this.props;
        let {selectedTracks} = this.props;
        const tracker = JSON.parse(localStorage.getItem('tracker'));
        const foundElement = tracker && tracker.findIndex(item => item.id === id);


        tracker[foundElement].tracks = [
            ...tracker[foundElement].tracks.slice(0, index),
            ...tracker[foundElement].tracks.slice(index + 1),
        ];
        localStorage.setItem('tracker', JSON.stringify(tracker));

        selectedTracks = [
            ...selectedTracks.slice(0, index),
            ...selectedTracks.slice(index + 1),
        ];
        removeTrack(selectedTracks);
    };

    render(){
        const {selectedUser, hours, description, submitTracker, selectedTracks} = this.props;
        const {changeInput, submit, deleteTrack} = this;
        const tracker = JSON.parse(localStorage.getItem('tracker'));

        return (
            <section>
                <div className="container">
                    <div className="row">
                        <div className="card" style={{width: '100%'}}>
                            <div className="card-body">
                                <h5 className="card-title">{selectedUser.name}</h5>
                                <form
                                    onSubmit={(e) => submit(e)}
                                >
                                    <div className="form-row">
                                        <div className="form-group col-md-2">
                                            <label>Hours</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="hours"
                                                value={hours}
                                                min="0.5"
                                                step="0.5"
                                                onChange={(e) => changeInput(e)}
                                            />
                                        </div>
                                        <div className="form-group col-md-10">
                                            <label>Task description</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="description"
                                                value={description}
                                                onChange={(e) => changeInput(e)}
                                            />
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-success"
                                        disabled={!hours}
                                    >Track</button>
                                    <Link to="/details">
                                        <button
                                            className="btn btn-primary btn-sm float-right details-btn"
                                        >Details</button>
                                    </Link>
                                </form>
                            </div>
                        </div>
                    </div>
                    {selectedTracks && selectedTracks.map((item, i) => (
                        <div className="row" key={i}>
                            <div className="card" style={{width: '100%'}}>
                                <div className="card-body">
                                    <span className="label">Spent hours: </span>{item.hours}h
                                    <span className="label"> Task description: </span>{item.description}h
                                    <button
                                        className="btn btn-danger btn-sm float-right"
                                        onClick={() => deleteTrack(selectedUser.id, i)}
                                    >Delete</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        )
    }
};

const connectedUserInfo = connect(state => {
    const {selectedUser, hours, description, selectedTracks} = state.main;

    return {
        selectedUser,
        hours,
        description,
        selectedTracks,
    }
}, {
    changeInputValue: mainActions.changeInputValue,
    submitTracker: mainActions.submitTracker,
    removeTrack: mainActions.removeTrack,
})(UserInfo);

export default UserInfo = connectedUserInfo;