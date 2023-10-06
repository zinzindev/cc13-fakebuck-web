import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import useClickFileInput from '../../hooks/useClickFileInput';

export default function PostForm() {
	const [title, setTitle] = useState('');
	const { file, ref, openFileInput, onChangeFileInput, onCancel } = useClickFileInput();
	const {
		authenticatedUser: { firstName },
	} = useAuth();

	return (
		<form>
			<textarea
				className='form-control border-0 shadow-none resize-none'
				placeholder={`What's on your mind, ${firstName}?`}
				rows='5'
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<div className='position-relative' role='button' onClick={openFileInput}>
				{file ? (
					<>
						<button
							className='btn-close position-absolute'
							type='button'
							style={{ top: 6, right: 6 }}
							onClick={(e) => {
								e.stopPropagation();
								onCancel();
							}}
							aria-label='btn'
						></button>
						<img src={URL.createObjectURL(file)} className='img-fluid' alt='post' />
					</>
				) : (
					<FileButton />
				)}
			</div>
			<input type='file' className='d-none' ref={ref} onChange={onChangeFileInput} />
			<div className='pt-3'>
				<button className='btn btn-primary w-100 fw-bold text-3.5 h-9'>Post</button>
			</div>
		</form>
	);
}

function FileButton() {
	return (
		<div className='position-relative' role='button'>
			<div className='d-flex flex-column align-items-center mt-3 py-3 rounded-2 bg-gray-100 hover-bg-gray-200'>
				<div className='text-center rounded-circle bg-gray-300 p-2 position-relative h-10 w-10 '>
					<i className='fa-regular fa-image position-absolute top-50 left-50 translate-middle' />
				</div>
				<div className='mt-1'>Add Photos</div>
			</div>
		</div>
	);
}
