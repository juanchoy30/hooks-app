import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodos } from "../../fixtures/demoTodos";

describe('test on todoReducer', () => {
    
    test('should return the default state', () => {
        
        const state = todoReducer( demoTodos, {});
        expect( state ).toEqual( demoTodos );
    
    });
    
    test('should add a toDo', () => {

        const newTodo = {
            id: 3,
            desc: 'Aprender Testing',
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo
        };
        
        const state = todoReducer( demoTodos, action);
        expect( state.length ).toBe( 3 );
        expect( state ).toEqual( [ ...demoTodos, newTodo ] );

    });

    test('should delete a toDo', () => {
       
        const action = {
            type: 'delete',
            payload: 2
        };

        const state = todoReducer( demoTodos, action );
        expect( state.length ).toBe( 1 );
        expect( state ).toEqual([ demoTodos[0] ]);

    });

    test('should do the Toggle of the todo', () => {

        const action = {
            type: 'toggle',
            payload: 1
        };
        
        const state = todoReducer( demoTodos, action);
        expect( state[0].done ).toBe( true );
        expect( state[1] ).toEqual( demoTodos[1] );

    });
    
})
