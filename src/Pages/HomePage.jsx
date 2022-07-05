import React from 'react'
import { Header, LeftBlock, RightBlock } from '../components';

const HomePage = () => {
	return (
		<div className="App">
			<div className="wrapper">
				<Header />
				<div className="page__container">
					<LeftBlock />
					<RightBlock />
				</div>
			</div>
		</div>
	)

}

export default HomePage