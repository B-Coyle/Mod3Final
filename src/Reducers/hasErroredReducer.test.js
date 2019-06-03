import {hasErroredReducer} from '../Reducers/hasErroredReducer';
import {hasErrored} from '../actions/index';

describe('hasErroredReducer', () => {
    it('should return a default state', () => {
        const expected = ''
        const result = hasErroredReducer(undefined ,{})
        expect(result).toBe(expected)
    });
    it('should return an action message' , () => {
        const expected = 'Error fetching president information'
        const result = hasErroredReducer(undefined, hasErrored('Error fetching president information'))
        expect(result).toEqual(expected);
    })

})