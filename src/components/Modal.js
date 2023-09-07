export default function Modal({ open, onClose, children, title }) {
	return (
		<>
			<div
				className={`modal fade show ${open ? 'd-block' : ''}`}
				tabIndex={-1}
				onMouseDown={onClose}
				onKeyDown={(e) => (e.key === 'Escape' ? onClose() : '')}
			>
				<div
					className='modal-dialog modal-dialog-centered'
					onMouseDown={(e) => e.stopPropagation()}
				>
					<div className='modal-content'>
						<div className='modal-header'>
							<button
								type='button'
								className='btn-close invisible'
								aria-label='invisible'
							/>
							<h5 className='modal-title'>{title}</h5>
							<button
								type='button'
								className='btn-close'
								aria-label='close'
								onClick={onClose}
							/>
						</div>
						<div className='modal-body'>{children}</div>
					</div>
				</div>
			</div>
			{open && <div className='modal-backdrop fade show' />}
		</>
	);
}
