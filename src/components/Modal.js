export default function Modal() {
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
						<div className='modal-body'></div>
					</div>
				</div>
			</div>
			<div className='modal-backdrop fade show' />
		</>
	);
}
