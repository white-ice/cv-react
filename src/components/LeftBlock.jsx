import React from 'react'
import avatar from '../assets/img/avatar.jpg'
import { Contacts, Education, Heading, Languges } from './index'

const LeftBlock = () => {
	return (
		<div className="left__block user">
			<div className="user__block">
				<img className="user__img" src={avatar} alt="Тонкопей Валентин" />
				<Heading className="user__name" tag='h1'>Тонкопей Валентин</Heading>
				<Heading className="user__speciality" tag='h2'>Front-end developer</Heading>
			</div>
			<Contacts />
			<Education />
			<Languges />
		</div>
	)
}

export default LeftBlock