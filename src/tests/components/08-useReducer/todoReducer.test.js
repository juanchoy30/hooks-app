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

        const todoId = 2;
       
        const action = {
            type: 'delete',
            payload: todoId
        }

        const [ firstId ] = demoTodos;

        const state = todoReducer( demoTodos, action );
        expect( state.length ).toBe( 1 );
        expect( state ).toEqual([ firstId ]);


    });
    

})
