import React, { useEffect, useState } from 'react'

import { Message } from './Message';
import './effects.css'

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect( () => {
        // console.log('Hey!');
    }, [] );  // Initial state

    useEffect( () => {
        // console.log('formState changed!');
    }, [formState] );  // when formState is changed

    useEffect( () => {
        // console.log('email changed!');
    }, [email] );  // when email is changed

    const handleInputChange = ({target}) => {

        setFormState({
            ...formState,
            [ target.name ]: target.value
        });
        
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr />

            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your name"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />
            </div>


            <div className="form-group mt-3">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Your email"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />
            </div>

            { (name === '123') && <Message /> }


        </>

    )
}
