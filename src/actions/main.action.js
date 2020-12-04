import {mainConstants} from '../constants/main.constants';
import {mainService} from '../services/main.service';

export const mainActions = {
    getUsers,
    selectUser,
    changeInputValue,
    submitTracker,
    removeTrack,
};

function getUsers(){
    return dispatch => {
        main(dispatch);
    };

    function main(dispatch) {
        dispatch(request());
        mainService
            .getUsers()
            .then(users => {
                console.log(users);
                dispatch(success(users.data));
            })
            .catch(error => {
                dispatch(failure(error));
            });
        function request() {
            return {
                type: mainConstants.GET_USERS_REQUEST
            }
        }
        function success(users) {
            return {
                type: mainConstants.GET_USERS_SUCCESS,
                payload: {
                    users
                }
            }
        }
        function failure(error) {
            return {
                type: mainConstants.GET_USERS_ERROR,
                payload: {
                    error
                }
            }
        }
    }
}

function selectUser(user, selectedTracks){
    return {
        type: mainConstants.SELECT_USER,
        payload: {
            user,
            selectedTracks
        }
    }
}

function changeInputValue(name, value){
    return {
        type: mainConstants.CHANGE_INPUT,
        payload: {
            name,
            value
        }
    }
}

function submitTracker(selectedTracks){
    return {
        type: mainConstants.SUBMIT_TRACKER,
        payload: {
            selectedTracks
        }
    }
}

function removeTrack(selectedTracks){
    return {
        type: mainConstants.DELETE_TRACK,
        payload: {
            selectedTracks
        }
    }
}
