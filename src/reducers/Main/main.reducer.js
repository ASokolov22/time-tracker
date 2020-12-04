import {mainConstants} from '../../constants/main.constants';

const initialState = {
    users: [],
    selectedUser: {},
    hours: '',
    description: '',
    selectedTracks: [],
};

export function main(state = initialState, action){

    switch(action.type){
        case mainConstants.GET_USERS_SUCCESS: {
            return {
                ...state,
                users: action.payload.users,
            }
        }
        case mainConstants.SELECT_USER: {
            return {
                ...state,
                selectedUser: action.payload.user,
                selectedTracks: action.payload.selectedTracks,
                hours: '',
                description: '',
            }
        }
        case mainConstants.CHANGE_INPUT: {
            const {name, value} = action.payload;
            return {
                ...state,
                [name]: value,
            }
        }
        case mainConstants.SUBMIT_TRACKER: {
            return{
                ...state,
                hours: '',
                description: '',
                selectedTracks: action.payload.selectedTracks,
            }
        }
        case mainConstants.DELETE_TRACK: {
            return{
                ...state,
                selectedTracks: action.payload.selectedTracks,
            }
        }

        default:
            return state
    }
}