import { createContext, useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';

import * as authApi from '../apis/auth-api';

import {
	getAccessToken,
	removeAccessToken,
	setAccessToken,
} from '../utils/local-storage';

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
		fetchAuthUser();
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

	return (
		<AuthContext.Provider value={{ authenticatedUser, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
}
