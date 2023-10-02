import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { STATUS_ME } from '../../config/constant';
import ProfileCover from './ProfileCover';
import ProfilePanel from './ProfilePanel';
import * as userApi from '../../apis/user-api';

export default function ProfileContainer() {
	const [profileUser, setprofileUser] = useState({});
	const [profileFriends, setprofileFriends] = useState([]);
	const [statusWithAuthUser, setstatusWithAuthUser] = useState(STATUS_ME);

	const { userId } = useParams();
	// console.log(userId);

	useEffect(() => {
		const fetchProfileUser = async () => {
			try {
				const res = await userApi.getProfileUser(userId);
				setprofileUser(res.data.user);
				setprofileFriends(res.data.friends);
				setstatusWithAuthUser(res.data.statusWithAuthUser);
			} catch (error) {
				console.log(error);
			}
		};
		fetchProfileUser();
	}, [userId]);

	const updateProfileUser = (value) => {
		setprofileUser({ ...profileUser, ...value });
	};

	return (
		<div
			className='shadow-sm pb-2'
			style={{ backgroundImage: 'linear-gradient(#f0f2f5, #fff)' }}
		>
			<ProfileCover coverImage={profileUser.coverImage} />
			<ProfilePanel
				profileUser={profileUser}
				profileFriends={profileFriends}
				statusWithAuthUser={statusWithAuthUser}
				updateProfileUser={updateProfileUser}
				setprofileFriends={setprofileFriends}
				setstatusWithAuthUser={setstatusWithAuthUser}
			/>
		</div>
	);
}
