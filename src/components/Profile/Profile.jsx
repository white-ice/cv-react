import React from 'react'
import Heading from '../UI/Heading/Heading'

const Profile = () => {
	return (
		<div className="section__profile">
			<Heading className='section__title' tag='h2'>Профіль</Heading>
			<p>Основний досвід базується на позиції верстальщика з ухилом у Front-end розробку, та частково
				взаємодію з Back-end.</p>

			<p>
				Остання компанія, в якій я працював, займалася продажем автозапчастин як в роздріб, так і
				оптом. Моїм завданням було виконувати різні таски по покращенню функціоналу та оновленню
				зовнішнього вигляду інтернет-магазину та покращити взаємодію з ним
				через покращення інтерфейсу.
			</p>

			<p>
				У цьому проекті я отримав досвід роботи з фреймворками YII1 і YII2, на яких будувався сам
				магазин і користувацька частина. Більшу частину моєї роботи довелося впровадити в готовий
				Back-end, а
				також переробити та переписати Front-end, написаний на JQuery
			</p>

			<p>
				У мене більше 5 років подібного досвіду, тому ось набір технологій, якими я володію на різних
				рівнях.
			</p>

			<ul>
				<li>- HTML5, HTML, CSS3, SASS, JQuery, JavaScript, ES6</li>
				<li>- Бібліотеки CSS Materializecss і Bootstrap</li>
				<li>- адаптив, методологія BEM</li>
				<li>- Для роботи з макетами використовую Adobe Photoshop, Adobe Illustrator, Figma</li>
				<li>- Для пришвидшення та комфортної розробки я використовую Webpack і Gulp в пакетах і окремо
				</li>
				<li>- Крім того, маю досвід роботи з CMS Wordpress, Opencart і Laravel, фреймворками YII1, а
					також з
					серверною мовою програмування PHP і MySQL базами даних</li>
			</ul>
		</div>
	)

}

export default Profile