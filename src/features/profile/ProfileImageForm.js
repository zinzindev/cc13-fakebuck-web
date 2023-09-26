import useAuth from '../../hooks/useAuth';
import Avatar from '../../components/Avatar';
import { useRef, useState } from 'react';

export default function ProfileImageForm() {
	const {
		authenticatedUser: { profileImage },
	} = useAuth();

	const [file, setFile] = useState(null);

	const inputEl = useRef(); // {current: <input type='file' className='d-none' />}

	return (
		<>
			<div className='d-flex justify-content-between align-items-center'>
				<h5 className='mb-0'>Profile Picture</h5>
				<input
					type='file'
					className='d-none'
					ref={inputEl}
					onChange={(e) => {
						// console.dir(e.target);
						if (e.target.files[0]) {
							setFile(e.target.files[0]);
						}
					}}
					// multiple //add more than one
				/>
				<div>
					{file && (
						<>
							<button className='btn btn-link text-decoration-none hover-bg-gray-100'>
								Save
							</button>
							<button
								className='btn btn-link text-decoration-none hover-bg-gray-100'
								onClick={() => {
                  setFile(null);
                  inputEl.current.value = null;
                  }}
							>
								Cancel
							</button>
						</>
					)}
					<button
						className='btn btn-link text-decoration-none hover-bg-gray-100'
						onClick={() => inputEl.current.click()}
					>
						Edit
					</button>
				</div>
			</div>
			<div className='text-center mt-3'>
				<span onClick={() => inputEl.current.click()}>
					<Avatar
						src={file ? URL.createObjectURL(file) : profileImage}
						size='168'
					/>
				</span>
			</div>
		</>
	);
}
