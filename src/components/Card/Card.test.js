import Card from './index'

describe('Card', () => {
    let wrapper

    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })
})