import { toast } from 'react-toastify';
import { useState } from 'react';

import * as authApi from '../../apis/auth-api';
import Input from '../../components/Input';
import useLoading from '../../hooks/useLoading';
import validateRegister from '../../validators/validate-register';

const initialInput = {
	firstName: '',
	lastName: '',
	emailOrMobile: '',
	password: '',
	confirmPassword: '',
};

export default function RegisterForm({ onClose }) {
	const [input, setInput] = useState(initialInput);
	const [error, setError] = useState({});

	const { startLoading, stopLoading } = useLoading();

	const handleChangeInput = (e) => {
		setInput({ ...input, [e.target.name]: e.target.value });
	};

	const handleSubmitForm = async (e) => {
		try {
			e.preventDefault();
			const resultErr = validateRegister(input);
			// console.dir(resultErr);
			if (resultErr) {
				setError(resultErr);
			} else {
				setError({});
				// await axios.post('http://localhost:8888/auth/register', {
				// 	firstName: 'John',
				// 	lastName: 'Doe',
				// 	password: '123456',
				// 	email: 'g@gmail.com',
				// });
				startLoading();
				await authApi.register(input);
				stopLoading();
				setInput(initialInput);
				onClose();
				toast.success('success register. please logi in to continue.');
			}
		} catch (error) {
			console.dir(error);
			// error.response.data.message
			toast.error(error.response?.data.message);
		} finally {
			stopLoading();
		}
	};

	return (
		<form className='row gx-2 gy-3' onSubmit={handleSubmitForm}>
			<div className='col-6'>
				<Input
					placeholder='First name'
					name='firstName'
					value={input.firstName}
					onChange={handleChangeInput}
					error={error.firstName}
				/>
			</div>
			<div className='col-6'>
				<Input
					placeholder='Last name'
					name='lastName'
					value={input.lastName}
					onChange={handleChangeInput}
					error={error.lastName}
				/>
			</div>
			<div className='col-12'>
				<Input
					placeholder='Email address or mobile number'
					name='emailOrMobile'
					value={input.emailOrMobile}
					onChange={handleChangeInput}
					error={error.emailOrMobile}
				/>
			</div>
			<div className='col-12'>
				<Input
					type='password'
					placeholder='New password'
					name='password'
					value={input.password}
					onChange={handleChangeInput}
					error={error.password}
				/>
			</div>
			<div className='col-12'>
				<Input
					type='password'
					placeholder='Confirm password'
					name='confirmPassword'
					value={input.confirmPassword}
					onChange={handleChangeInput}
					error={error.confirmPassword}
				/>
			</div>
			<div className='col-12'>
				<button
					type='submit'
					className='btn btn-green btn-sm text-4.5 h-9 tw-px-10'
				>
					Sign Up
				</button>
			</div>
		</form>
	);
}
