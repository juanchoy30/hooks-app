import React, { useEffect } from 'react'

export const Message = () => {

    useEffect(() => {
        
        console.log('Component loaded');

        return () => {
            console.log('Component unloaded');
        }
    }, [])

    return (
        <div>
            <h3>You are greate!</h3>
        </div>
    
)
}