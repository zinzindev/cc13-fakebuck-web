import { useParams } from 'react-router-dom';

import { STATUS_FRIEND, STATUS_UNKNOWN } from '../../config/constant';
import * as friendApi from '../../apis/friend-api';
import useAuth from '../../hooks/useAuth';

export default function AccepterAction({ setprofileFriends, setstatusWithAuthUser }) {
	const { userId } = useParams();
	const { authenticatedUser } = useAuth();

	const handleClickAccept = async () => {
		await friendApi.acceptFriend(userId);
		setstatusWithAuthUser(STATUS_FRIEND);
		setprofileFriends((oledFriends) => [...oledFriends, authenticatedUser]);
	};

	const handleClickReject = async () => {
		await friendApi.deleteFriend(userId);
		setstatusWithAuthUser(STATUS_UNKNOWN);
	};
	return (
		<>
			<button className='btn btn-gray-200' aria-label='btn' onClick={handleClickAccept}>
				<i className='fa-solid fa-user-check' /> <span>Accept</span>
			</button>
			<button className='btn btn-gray-200 ms-3' aria-label='btn' onClick={handleClickReject}>
				<i className='fa-solid fa-user-xmark' /> <span>Reject</span>
			</button>
		</>
	);
}
