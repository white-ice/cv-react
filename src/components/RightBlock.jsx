import React from 'react'
import { Experience, Interest, Profile, Skills } from './index'

const RightBlock = () => {
	return (
		<div className="right__block">
			<Profile />
			<Experience />
			<Skills />
			<Interest />
		</div>
	)

}

export default RightBlock