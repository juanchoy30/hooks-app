import React from 'react';
import { shallow } from 'enzyme';
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';

describe('tests on <TodoAdd />', () => {

    const handleAddTodo = jest.fn();

    const wrapper = shallow(
        <TodoAdd 
            handleAddTodo={ handleAddTodo }
        />
    )

    test('should render correctly', () => {

        expect( wrapper ).toMatchSnapshot();
        
    });

    test('should not call handleAddTodo', () => {
       
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({ preventDefault(){} });   // The event must be sent as argument because of the preventDefault() // preventDefault(){} short form to indicate function
        expect( handleAddTodo ).toHaveBeenCalledTimes(0);
    
    });
    
    test('should call handleAddTodo', () => { 

        const value = 'Aprender React';
        wrapper.find('input').simulate('change', {
            target: {
                value,
                name: 'description'
            }
        });

        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({ preventDefault(){} }); 
        expect( handleAddTodo ).toHaveBeenCalledTimes(1);
        expect( handleAddTodo ).toHaveBeenCalledWith( expect.any(Object) ); //This test could pass with an empty object {}, so it has to be settled more precisely
        
        expect( handleAddTodo ).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc:value,
            done:false
        });

        expect( wrapper.find('input').prop('value') ).toBe('');

    });

})
