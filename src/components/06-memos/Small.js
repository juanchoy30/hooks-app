import React from 'react'

export const Small = React.memo(({ value }) => {   // memo will renderise the components only if value chage, not otherwise

    console.log('I showed myself again')

    return (
        <small>
            { value }
        </small>
    )
});