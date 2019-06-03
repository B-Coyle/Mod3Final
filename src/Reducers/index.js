import {combineReducers} from 'redux';
import {getPresidentsReducer} from './getPresidentsReducer';
import {hasErroredReducer} from './hasErroredReducer';
import {isLoadingReducer} from './isLoadingReducer';

const rootReducer = combineReducers({
    presidents: getPresidentsReducer,
    hasErrored: hasErroredReducer,
    isLoading: isLoadingReducer
})

export default rootReducer