import React, { useEffect, useState } from 'react'
import { Login, CreateUser, DropdownUser } from '../index'
import { onAuthStateChanged } from "firebase/auth";
import ModalContext from '../../context/modal.context'
import { auth } from '../../firebase';

const Header = () => {
	const [getLanguage, setLanguage] = useState('uk')
	const [loginModal, setLoginModal] = useState(false)
	const [createUserModal, setCreateUserModal] = useState(false)
	const [user, setUser] = useState(null)


	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				console.log(user);
				setUser(user)
			} else {
				setUser(null)
			}
		})

	}, [])

	return (
		<div className='header__container header'>
			<nav className='havbar'>
				<div className="navbar__left"></div>
				<div className="navbar__center"></div>
				<div className="navbar__right">
					<div className="navbar__language language">{getLanguage}</div>
					{
						user
							? <DropdownUser user={user} setUser={setUser} />
							: <div onClick={() => setLoginModal(true)} className="navbar__login login">Увійти</div>
					}
				</div>
			</nav>

			<ModalContext.Provider value={{ visible: loginModal, setVisible: setLoginModal }}>
				<Login
					setCreateUserModal={setCreateUserModal}
					setLoginModal={setLoginModal}
					setUser={setUser}
				/>
			</ModalContext.Provider>

			<ModalContext.Provider value={{ visible: createUserModal, setVisible: setCreateUserModal }}>
				<CreateUser
					setCreateUserModal={setCreateUserModal}
					setUser={setUser}
				/>
			</ModalContext.Provider>
		</div>
	)

}

export default Header