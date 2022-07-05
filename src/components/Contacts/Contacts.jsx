import React from 'react'
import Heading from '../UI/Heading/Heading'

const Contacts = () => {
	const contacts = [
		{
			title: 'Контакти',
		},
		{
			id: 'tel',
			class: 'user__tel m__t-5 m__b-4',
			icon: 'fa fa-light fa-phone',
			href: 'tel:+380970535708',
			text: '+38 097 053 57 08'
		},
		{
			id: 'email',
			class: 'user__email m__b-4',
			icon: 'fa fa-light fa-envelope',
			href: 'mailto:vtonkopey@gamil.com',
			text: 'vtonkopey@gamil.com'
		},
		{
			id: 'in',
			class: 'user__linkedin m__b-4',
			icon: 'fa fa-brands fa-linkedin-in',
			href: 'https://www.linkedin.com/in/valentin-tonkopei-82071b5b/',
			text: 'www.linkedin.com/me'
		},
		{
			id: 'address',
			class: 'user__address m__b-4',
			icon: 'fa fa-thin fa-location-dot',
			href: 'https://goo.gl/maps/chjadEJA3HaSL4hA8',
			text: 'Біла Церква, Україна'
		}
	]
	return (
		<div className="user__contact">
			{
				contacts.map((c, i) => (
					c.title
						? <Heading key={i} className="block__title" tag='h2'>{c.title}</Heading>
						: <div key={c.id} className={c.class}>
							<i className={c.icon}></i>
							<a href={c.href}>{c.text}</a>
						</div>
				))
			}
		</div>
	)

}

export default Contacts