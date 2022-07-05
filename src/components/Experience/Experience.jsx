import React from 'react'
import Heading from '../UI/Heading/Heading'

const Experience = () => {
	const experience = [
		{ title: 'Досвід роботи' },
		{
			data: '2021-2022',
			company: 'Avtoduma',
			link: '',
			titleText: 'Front-end developer',
			description: 'Отримав добрий досвід роботи над недуже добре написаним проєктом. Було багато завдань по оновленню функціоналу.'
		},
		{
			data: '018-2019',
			company: 'Recreation management software',
			link: 'https://www.dserec.com/#homepage',
			titleText: 'Front-end developer',
			description: 'Познайомився з Laravel. Отримав досвід роботи з насправді великим проєктом, в якому реализовано дуже багато різноманітного функціоналу.'
		},
		{
			data: '2017-2018',
			company: 'Evergreen',
			link: 'https://evergreens.com.ua/ua/',
			titleText: 'Верстальщик',
			description: 'Неймовірно цінний досвід. Спринти, оцінка проєкта, планування, робота одночасно над декількома проєктами з різними командами - все це і навіть більше мені пощастило покуштувати.'
		},
		{
			data: '2012-2015',
			company: 'Upwork',
			link: 'https://www.upwork.com/freelancers/~01206304ed29688413',
			titleText: 'Web-developer',
			description: 'Тута я починав. В основному брався за верстку.'
		},
	]
	return (
		<div className="section__experience experience">

			{
				experience.map((e, i) => (
					e.title
						? <Heading key={i} className='section__title' tag='h2'>{e.title}</Heading>
						: <div key={i} className="experience__block">
							<div className="experience__left-block">
								<div className="experience__date">{e.data}</div>
								<div className="experience__company">
									<a href={e.link}>{e.company}</a>
								</div>

							</div>
							<div className="experience__right-block">
								<h3 className="experience__title">{e.titleText}</h3>
								<p>{e.description}</p>
							</div>
						</div>
				))
			}
		</div>
	)

}

export default Experience