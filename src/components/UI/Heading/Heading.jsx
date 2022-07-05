import React from 'react'

const Heading = ({ tag, children, ...props }) => {

	return (
		<>
			{tag === 'h1'
				? <h1 {...props}>{children}</h1>
				: <h2 {...props}>{children}</h2>
			}
		</>
	)

}

export default Heading