import React from 'react'
import Heading from '../UI/Heading/Heading'

const Education = () => {
	const education = [
		{ title: 'Освіта' },
		{
			data: '20012 - 2022',
			peciality: 'web-developer',
			institutionName: 'Авторів не вказую'
		},
		{
			data: '2007 - 2010',
			peciality: 'Менеджмент організація (митна справа)',
			institutionName: 'Київський славістичний університет'
		}
	]
	return (
		<div className="user__education education">
			{
				education.map((e, i) => (
					e.title
						? <Heading key={i} className="block__title" tag='h2'>{ }</Heading>
						: <div key={i} className="education__block">
							<div className="education__date">{e.data}</div>
							<div className="education__speciality">{e.peciality}</div>
							<div className="education__institution-name">{e.institutionName}</div>
						</div>
				))
			}
		</div>
	)

}

export default Education