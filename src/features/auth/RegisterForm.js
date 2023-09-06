export default function RegisterForm() {
	return (
		<form className='row gx-2 gy-3'>
			<div className='col-6'>
				<input
					className='form-control'
					type='text'
					placeholder='First name'
					ref={(inputElement) => inputElement ? inputElement.focus() : ''}
				/>
			</div>
			<div className='col-6'>
				<input className='form-control' type='text' placeholder='Last name' />
			</div>
			<div className='col-12'>
				<input
					className='form-control'
					type='text'
					placeholder='Mobile number or email address'
				/>
			</div>
			<div className='col-12'>
				<input
					className='form-control'
					type='text'
					placeholder='New password'
				/>
			</div>
			<div className='col-12'>
				<input
					className='form-control'
					type='text'
					placeholder='Confirm password'
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
