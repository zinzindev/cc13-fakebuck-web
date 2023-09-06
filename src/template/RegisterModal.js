export default function RegisterModal() {
	return (
		<>
			<div className='modal fade show d-block' tabIndex='-1'>
				<div className='modal-dialog modal-dialog-centered'>
					<div className='modal-content'>
						<div className='modal-header'>
							<button
								type='button'
								className='btn-close invisible'
								aria-label='btn'
							/>
							<h5 className='modal-title'>Sign Up</h5>
							<button
								type='button'
								className='btn-close'
								aria-label='btn'
							/>
						</div>
						<div className='modal-body'>
							{/* Register Form */}

							<form className='row gx-2 gy-3'>
			<div className='col-6'>
				<input className='form-control' type='text' placeholder='First name' />
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

							{/* End Register Form */}
						</div>
					</div>
				</div>
			</div>
			<div className='modal-backdrop fade show' />
		</>
	);
}
