import axios from '../config/axios';

// export const deleteFriend = friendId => axios.delete('/friend/' + friendId);
export const deleteFriend = friendId => axios.delete(`/friends/${friendId}`);