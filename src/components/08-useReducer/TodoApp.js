import React, { useReducer } from 'react'
import { todoReducer } from './todoReducer';

import './styles.css';


// useState and useReducer are almost the same. However, useState should be used
// when simple states or few things have to be change. When complex or many actions
// have to me run, useReducer must be used.

const initialState = [{
    id: new Date().getTime(),
    desc: 'Learn piano',
    done: false
}];

export const TodoApp = () => {

    const [ todos ] = useReducer( todoReducer, initialState );

    console.log( todos );

    return (
        <div>
            <h1>Todo App</h1>
            <hr />

            <ul>
                <li>Hola</li>
                <li>Mundo</li>
                <li>Hola de nuevo</li>
            </ul>


        </div>
    )
}
