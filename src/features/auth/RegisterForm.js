import { useState } from 'react';
import * as Joi from 'joi';

const initialInput = {
	firstName: '',
	lastName: '',
	emailOrMobile: '',
	password: '',
	confirmPassword: '',
};

const regitsterSchem = Joi.object({
	firstName: Joi.string().trim().required(),
	lastName: Joi.string().trim().required(),
	emailOrMobile: Joi.alternatives().try(
		Joi.string().email({ tlds: false }),
		Joi.string().pattern(/^[0-9]{10}$/)
	),
	password: Joi.string().alphanum().min(6).required().trim(),
	confirmPassword: Joi.string().valid(Joi.ref('password')).required().trim(),
});

const validateRegister = (input) => {
	return regitsterSchem.validate(input, {
		abortEarly: false,
	});
};

export default function RegisterForm() {
	const [input, setInput] = useState(initialInput);
	const [error, setError] = useState(initialInput);

	const handleChangeInput = (e) => {
		setInput({ ...input, [e.target.name]: e.target.value });
	};

	const handleSubmitForm = (e) => {
		e.preventDefault();
		const { value, error } = validateRegister(input);
		if (error) {
			const newError = error.details.reduce((acc, el) => {
				acc[el.context.label] = el.message;
				return acc;
			}, {});
			console.dir(newError);
			setError(newError);
		}
		console.dir(error);
	};

	return (
		<form className='row gx-2 gy-3' onSubmit={handleSubmitForm}>
			<div className='col-6'>
				<input
					className='form-control is-invalid'
					type='text'
					placeholder='First name'
					name='firstName'
					value={input.firstName}
					onChange={handleChangeInput}
					ref={(inputElement) => (inputElement ? inputElement.focus() : '')}
				/>
				<div className='invalid-feedback'>{error.firstName}</div>
			</div>
			<div className='col-6'>
				<input
					className='form-control is-invalid'
					type='text'
					placeholder='Last name'
					name='lsstName'
					value={input.lsstName}
					onChange={handleChangeInput}
				/>
				<div className='invalid-feedback'>{error.lastName}</div>
			</div>
			<div className='col-12'>
				<input
					className='form-control is-invalid'
					type='text'
					placeholder='Mobile number or email address'
					name='emailOrMobile'
					value={input.emailOrMobile}
					onChange={handleChangeInput}
				/>
				<div className='invalid-feedback'>{error.emailOrMobile}</div>
			</div>
			<div className='col-12'>
				<input
					className='form-control is-invalid'
					type='password'
					placeholder='New password'
					name='password'
					value={input.password}
					onChange={handleChangeInput}
				/>
				<div className='invalid-feedback'>{error.password}</div>
			</div>
			<div className='col-12'>
				<input
					className='form-control is-invalid'
					type='password'
					placeholder='Confirm password'
					name='confirmPassword'
					value={input.confirmPassword}
					onChange={handleChangeInput}
				/>
				<div className='invalid-feedback'>{error.confirmPassword}</div>
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
