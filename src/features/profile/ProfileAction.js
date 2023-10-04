import {
	STATUS_ACCEPTER,
	STATUS_FRIEND,
	STATUS_ME,
	STATUS_REQUESTER,
	STATUS_UNKNOWN,
} from '../../config/constant';
import AccepterAction from './AccepterAction';
import FriendAction from './FriendAction';
import MeAction from './MeAction';
import RequesterAction from './RequestterAction';
import UnknownAction from './UnknownAction';

export default function ProfileAction({
	statusWithAuthUser,
	updateProfileUser,
	setprofileFriends,
	setstatusWithAuthUser,
}) {
	return (
		<div className='mb-3 align-self-md-end'>
			{statusWithAuthUser === STATUS_ME && (
				<MeAction updateProfileUser={updateProfileUser} />
			)}
			{statusWithAuthUser === STATUS_FRIEND && (
				<FriendAction
					setprofileFriends={setprofileFriends}
					setstatusWithAuthUser={setstatusWithAuthUser}
				/>
			)}
			{statusWithAuthUser === STATUS_UNKNOWN && (
				<UnknownAction setstatusWithAuthUser={setstatusWithAuthUser} />
			)}
			{statusWithAuthUser === STATUS_REQUESTER && (
				<AccepterAction
					setprofileFriends={setprofileFriends}
					setstatusWithAuthUser={setstatusWithAuthUser}
				/>
			)}
			{statusWithAuthUser === STATUS_ACCEPTER && (
				<RequesterAction setstatusWithAuthUser={setstatusWithAuthUser} />
			)}
		</div>
	);
}
