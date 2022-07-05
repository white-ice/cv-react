import React from 'react'

const Input = ({ ...props }) => {
    return (
        <input className='form__control' {...props} />
    )
}

export default Input