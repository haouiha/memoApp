import axios from 'axios';
import { getServerSession } from 'next-auth';
import { getSession } from 'next-auth/react';

const isServer = typeof window === 'undefined';

const axiosClient = axios.create();

axiosClient.interceptors.request.use(
	async (config) => {
		let accessToken = '';

		const session = await (isServer ? getServerSession() : getSession());
		accessToken = session?.accessToken ?? '';

		if (accessToken && !config.headers.Authorization) {
			config.headers.Authorization = `Bearer ${accessToken}`;
		}

		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export default axiosClient;
