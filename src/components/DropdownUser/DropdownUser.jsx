import React, { useState } from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../../firebase';

const DropdownUser = ({ user, setUser }) => {
	const [dropdownState, setDropdownState] = useState(false)

	const signOutUser = () => {
		setUser(null)
		signOut(auth).then(() => {
			// Sign-out successful.
		}).catch((error) => {
			console.log(error.message);
		});
	}

	return (
		<div className='navbar__dropdown dropdown'>
			<div onClick={() => setDropdownState(!dropdownState)} className='navbar__user user' style={{ color: 'white' }}>{user.email[0].toUpperCase()}</div>
			<div className={dropdownState ? 'dropdown__menu open' : 'dropdown__menu'}>
				<ul>
					<li onClick={() => signOutUser()}>Выйти</li>
				</ul>
			</div>
		</div>
	)

}

export default DropdownUser