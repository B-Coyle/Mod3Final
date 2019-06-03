import {getPresidentsReducer} from '../Reducers/getPresidentsReducer';
import {getPresidents} from '../actions/index';

describe('getPresidentReducer', () => {

    const mockPresidents = [{president: 'Washington'}]
    it('should return a default state', () => {
        const expected = []
        const result = getPresidentsReducer(undefined ,{})
        expect(result).toEqual(expected)
    });

    it('should return an action message' , () => {
        const expected = 'Error fetching president information'
        const result = getPresidentsReducer(undefined, getPresidents('Error fetching president information'))
        expect(result).toEqual(expected);
    })

})