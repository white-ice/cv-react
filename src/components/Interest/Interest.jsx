import React from 'react'
import Heading from '../UI/Heading/Heading'

const Interest = () => {
	const interest = [
		{ title: 'Інтереси' },
		{
			icon: 'fa fa-light fa-person-biking',
			name: 'Велотуризм'
		},
		{
			icon: 'fa fa-light fa-fish',
			name: 'Риболовля'
		},
		{
			icon: 'fa fa-light fa-laptop-code',
			name: 'Навчання'
		},
	]
	return (
		<div className="section__interest interest">
			<Heading className="section__title" tag='h2'>{interest[0].title}</Heading>
			<div className="interest__items">
				{
					interest.map((int, i) => (
						!int.title &&
						<div key={i} className="interest__block">
							<i className={int.icon}></i>
							<div className="interest__name">{int.name}</div>
						</div>
					))
				}
			</div>
		</div>
	)

}

export default Interest