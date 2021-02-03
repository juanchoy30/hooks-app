import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import './styles.css';


// useState and useReducer are almost the same. However, useState should be used
// when simple states or few things have to be change. When complex or many actions
// have to me run, useReducer must be used.

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];    /// || if null return [] empty array
};

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer( todoReducer, [], init );

    useEffect( ()=> {
        localStorage.setItem('todos', JSON.stringify( todos ));
    }, [todos] );

    const handleDelete = ( todoId ) => {
        console.log(todoId)

        const action = {
            type: 'delete',
            payload: todoId
        }

        dispatch( action );
    }

    const handleToggle = ( todoId ) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        })
    } 


    const handleAddTodo = ( newTodo ) => {

        dispatch({
            type: 'add',
            payload: newTodo
        });

    }


    return (
        <div>
            <h1>Todo App <small>( { todos.length } )</small></h1>
            <hr />

            <div className="row">

                <div className="col-7">

                    <TodoList 
                        todos={ todos }
                        handleToggle={ handleToggle } 
                        handleDelete={ handleDelete }
                    />

                </div>

                <div className="col-5">

                    <TodoAdd 
                        handleAddTodo={ handleAddTodo }
                    />

                </div>

            </div>


        </div>
    )
}
