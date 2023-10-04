import { useParams } from 'react-router-dom';

import { STATUS_UNKNOWN } from '../../config/constant';
import * as friendApi from '../../apis/friend-api';

export default function RequesterAction({ setstatusWithAuthUser }) {
	const { userId } = useParams();

	const handleClickButton = async () => {
		await friendApi.deleteFriend(userId);
		setstatusWithAuthUser(STATUS_UNKNOWN);
	};
	return (
		<button className='btn btn-gray-200' aria-label='btn' onClick={handleClickButton}>
			<i className='fa-solid fa-user-xmark' /> <span>Cancel Request</span>
		</button>
	);
}
