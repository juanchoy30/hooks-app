import React from 'react';
import { shallow } from 'enzyme';
import { TodoList } from '../../../components/08-useReducer/TodoList';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Tests on <TodoList />', () => {
    
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(
        <TodoList
            todos={ demoTodos }
            handleToggle={ handleToggle }
            handleDelete={ handleDelete }
        />
    );

    test('should render correctly', () => {

        expect( wrapper ).toMatchSnapshot();
        
    });

    test('should have two <TodoListItems />', () => {

        expect( wrapper.find('TodoListItem').length ).toBe( demoTodos.length );
        expect( wrapper.find('TodoListItem').at(0).prop('handleDelete') ).toEqual( expect.any(Function) );
    });
    


})
