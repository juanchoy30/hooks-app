import React from 'react';
import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';

jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');


describe('<MultipleCustomHooks /> tests', () => {

    useCounter.mockReturnValue({
        counter: 10,
        increment: () => {}
    });

    test('should render correctly', () => {

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });
        
        const wrapper = shallow( <MultipleCustomHooks /> );
        expect( wrapper ).toMatchSnapshot();

    });

    test('should show the information', () => {
        
        useFetch.mockReturnValue({
            data: [{
                author: 'Juan Miguel',
                quote: 'Hello World'
            }],
            loading: false,
            error: null
        });
        
        const wrapper = shallow( <MultipleCustomHooks /> );

        expect( wrapper.find('.alert').exists() ).toBe( false );
        expect( wrapper.find('.mb-2').text().trim() ).toBe( 'Hello World' );
        expect( wrapper.find('footer').text().trim() ).toBe( 'Juan Miguel' );
    });
    
        
})
