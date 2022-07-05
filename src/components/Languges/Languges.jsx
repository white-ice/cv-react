import React from 'react'
import Heading from '../UI/Heading/Heading'

const Languges = () => {
	const languges = [
		{ title: 'Мови' },
		{
			name: 'English',
			result: '30%'
		},
		{
			name: 'Українська',
			result: '90%'
		},
		{
			name: 'Російська',
			result: '90%'
		},
	]
	return (
		<div className="user__languages languages">
			{
				languges.map((l, i) => (
					l.title
						? <Heading key={i} className="block__title" tag='h2'>{l.title}</Heading>
						: <div key={i} className="languages__block">
							<div className="languages__name">{l.name}</div>
							<div className="languages__range static-range">
								<div className="static-range__result" style={{ width: l.result }}></div>
							</div>
						</div>
				))
			}
		</div>
	)

}

export default Languges