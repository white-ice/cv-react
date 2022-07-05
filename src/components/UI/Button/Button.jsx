import React from 'react'

const Button = ({ children, ...prop }) => {
	return (
		<>
			<button className='button' {...prop}>{children}</button>
		</>
	)

}

export default Button