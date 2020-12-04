import {combineReducers} from 'redux';
import {main} from './Main/main.reducer';

const rootReducer = combineReducers({
    main,
});

export default rootReducer;