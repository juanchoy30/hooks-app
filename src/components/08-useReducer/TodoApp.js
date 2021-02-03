import React, { useReducer } from 'react'
import { todoReducer } from './todoReducer';

import './styles.css';


// useState and useReducer are almost the same. However, useState should be used
// when simple states or few things have to be change. When complex or many actions
// have to me run, useReducer must be used.

const initialState = [{
    id: new Date().getTime(),
    desc: 'Learn React',
    done: false
}];

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer( todoReducer, initialState );

    console.log( todos );

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const newTodo = {
            id: new Date().getTime(),
            desc: 'New task',
            done: false
        }

        const action = {
            type: 'add',
            payload: newTodo
        }

        dispatch( action );
    }

    return (
        <div>
            <h1>Todo App <small>( { todos.length } )</small></h1>
            <hr />

            <div className="row">

                <div className="col-7">

                    <ul className="list-group list-group-flush">
                        {
                            todos.map( (todo, i) => (
                                <li
                                    key={ todo.id }
                                    className="list-group-item"
                                    > 
                                    <p className="text-center"> { i + 1 }. { todo.desc } </p>
                                    <button
                                        className="btn btn-danger"
                                        >
                                        Delete
                                    </button>
                                </li>
                            ))
                        }
                    </ul>

                </div>

                <div className="col-5">

                    <h4>Add todo</h4>
                    <hr />

                    <form onSubmit={ handleSubmit }>
                        <input
                            type="text"
                            name="description"
                            className="form-control"
                            placeholder="Learn..."
                            autoComplete="off"
                        />

                        <button
                            type="submit"
                            className="btn btn-outline-primary btn-block mt-1"
                        >
                            Add
                        </button>
                    </form>

                </div>

            </div>


        </div>
    )
}
