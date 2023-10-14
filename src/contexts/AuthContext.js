import { createContext, useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';

import { getAccessToken, removeAccessToken, setAccessToken } from '../utils/local-storage';
import * as authApi from '../apis/auth-api';

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
	const [authenticatedUser, setAuthenticatedUser] = useState(
		getAccessToken() ? true : null
	);

	useEffect(() => {
		const fetchAuthUser = async () => {
			try {
				const res = await authApi.getMe();
				setAuthenticatedUser(res.data.user);
			} catch (error) {
				removeAccessToken();
			}
		};
		if (getAccessToken()) {
			fetchAuthUser();
		}
	}, []);

	const login = async (emailOrMobile, password) => {
		const res = await authApi.login({ emailOrMobile, password });
		console.dir(res);
		setAccessToken(res.data.accessToken);
		setAuthenticatedUser(jwtDecode(res.data.accessToken));
	};

	const logout = () => {
		removeAccessToken();
		setAuthenticatedUser(null);
	};

	const updateProfile = (data) => {
		setAuthenticatedUser({ ...authenticatedUser, ...data });
	};

	return (
		<AuthContext.Provider value={{ authenticatedUser, login, logout, updateProfile }}>
			{children}
		</AuthContext.Provider>
	);
}
