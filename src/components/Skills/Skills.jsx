import React from 'react'
import Heading from '../UI/Heading/Heading'

const Skills = () => {
	const skills = [
		{ title: 'Професійні навички' },
		{
			name: 'HTML',
			range: '90%'
		},
		{
			name: 'CSS3/SASS(SCSS)',
			range: '75%'
		},
		{
			name: 'JavaScript',
			range: '65%'
		},
		{
			name: 'TypeScript',
			range: '35%'
		},
		{
			name: 'React',
			range: '45%'
		},
		{
			name: 'Webpack/Gulp',
			range: '65%'
		},
		{
			name: 'Git',
			range: '70%'
		},
		{
			name: 'Photoshop',
			range: '65%'
		},
		{
			name: 'Figma',
			range: '70%'
		},
		{
			name: 'PHP',
			range: '65%'
		},
		{
			name: 'MySQL',
			range: '35%'
		},

	]
	return (
		<div className="section__skills skills">
			{
				skills.map((s, i) => (
					s.title
						? <Heading key={i} className="section__title" tag='h2'>{s.title}</Heading>
						: <div key={i} className="skills__block">
							<span className="skills__name">{s.name}</span>
							<div className="skills__range static-range">
								<div className="static-range__result" style={{ width: s.range }}></div>
							</div>
						</div>
				))
			}
		</div>
	)

}

export default Skills