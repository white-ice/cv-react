import React, { useState } from 'react'
import { Modal, Input, Button } from '../index'
import { auth } from '../../firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";


const CreateUser = ({ createUserModal, setCreateUserModal, setUser }) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const onCreate = (email, password) => {
		console.log('create')
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				console.log(userCredential.user);
				setCreateUserModal(false)
				setUser(userCredential.user)
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;

				console.log(errorCode);
				console.log(errorMessage);
			});
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
				onClick={() => onCreate(email, password)}
			>
				Create
			</Button>
		</Modal>
	)

}

export default CreateUser