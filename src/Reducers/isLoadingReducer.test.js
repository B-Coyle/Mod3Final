import {isLoadingReducer} from '../Reducers/isLoadingReducer';
import {isLoading} from '../actions/index';

describe('hasErroredReducer', () => {
    it('should return a default state', () => {
        const expected = false
        const result = isLoadingReducer(undefined ,{})
        expect(result).toEqual(expected)
    });
    it('should return an action boolean' , () => {
        const expected = true
        const result = isLoadingReducer(undefined, isLoading(true))
        expect(result).toEqual(expected);
    })

})