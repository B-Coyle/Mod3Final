import {mapStateToProps, mapDispatchToProps} from './index';

describe('App', () => {
    let wrapper

    const mockProps = {
        isLoading: false,
        hasErrored: '',
        presidents: [{president: 'Washington'}]
    }

    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })

    describe('mapStateToProps', () => {
        it('should return a props object with isLoading, hasErrored, and an array of presidents', () => {
            const mockState= {
                ...mockProps,
                presidents: [{president: 'Washington'}]
            }
            const expected = mockProps
            const mappedProps = mapStateToProps(mockState)
            expect(mappedProps).toEqual(expected);
        })
    })

    describe('mapDispatchToProps', () => {
        it('should dispatch the fetchPresidents thunk', () => {
            const mockDispatch = jest.fn()
            const mappedProps = mapDispatchToProps(mockDispatch);
            mappedProps.fetchPresidents()
            expect(mockDispatch).toHaveBeenCalled()
        })
    })



})