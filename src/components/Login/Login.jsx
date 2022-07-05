import React, { useState } from 'react'
import { Modal, Input, Button } from '../index'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase'

const Login = ({ setCreateUserModal, setUser, setLoginModal }) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const onLogin = (email, password) => {
		console.log('login');
		signInWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				console.log(user);
				setUser(user)
				setLoginModal(false)
			})
			.catch((error) => {
				console.log(error.code)
				console.log(error.message)
			})
	}

	const onCreateUserModal = () => {
		setLoginModal(false)
		setCreateUserModal(true)
	}

	return (
		<Modal>
			<Input
				type='email'
				placeholder='email'
				value={email}
				onChange={e => setEmail(e.target.value)} />
			<Input
				type='password'
				placeholder='password'
				value={password}
				onChange={e => setPassword(e.target.value)} />
			<Button
				onClick={() => onLogin(email, password)}
			>
				Увійти
			</Button>
			<div>
				<button onClick={() => onCreateUserModal()}>Зареєструватись</button>
			</div>
		</Modal>
	)

}

export default Login