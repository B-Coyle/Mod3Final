import CardContainer from './index';

describe('CardContainer' , () => {
    let wrapper 
    
    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })
})
