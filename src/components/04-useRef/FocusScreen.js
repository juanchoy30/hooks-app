import React, { useRef } from 'react';
import '../02-useEffect/effects.css';

export const FocusScreen = () => {

    const inputRef = useRef();
    // console.log(ref);

    const handClick = () => {
        inputRef.current.select();  // it would be the same to put document.querySelector('input').select();
        // console.log(inputRef);
    }


    return (
        <div>
            <h1>FocusScreen</h1>
            <hr />

            <input 
                ref={ inputRef }
                className="form-control"
                placeholder="Your name"
            />

            <button 
                className="btn btn-outline-primary mt-3"
                onClick={ handClick }
            >
                Focus
            </button>
        </div>
    )
}
