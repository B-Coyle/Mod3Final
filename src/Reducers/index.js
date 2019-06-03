import {combineReducers} from 'redux';
import {getPresidentsReducer} from './getPresidentsReducer';
import {hasErroredReducer} from './hasErroredReducer';
import {isLoadingReducer} from './isLoadingReducer';

export const rootReducer = combineReducers({
    presidents: getPresidentsReducer,
    hasErrored: hasErroredReducer,
    isLoading: isLoadingReducer
})


