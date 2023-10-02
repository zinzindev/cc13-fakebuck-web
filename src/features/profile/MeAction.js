import { useState } from 'react';
import Modal from '../../components/Modal';
import ProfileImageForm from './ProfileImageForm';
import CoverImageForm from './CoverImageForm';

export default function MeAction({ updateProfileUser }) {
	const [open, setOpen] = useState(false);
	return (
		<>
			<button
				className='btn btn-gray-200'
				aria-label='btn'
				onClick={() => setOpen(true)}
			>
				<i className='fa-solid fa-pen' /> <span>Edit Profile</span>
			</button>
			<Modal open={open} onClose={() => setOpen(false)} title='Edit Profile'>
				<ProfileImageForm
					onSuccess={() => setOpen(false)}
					updateProfileUser={updateProfileUser}
				/>
				<CoverImageForm />
			</Modal>
		</>
	);
}
