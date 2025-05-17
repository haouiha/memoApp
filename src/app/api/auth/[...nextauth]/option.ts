import axios from 'axios';
import { NextAuthOptions } from 'next-auth';

export const authOptions: NextAuthOptions = {
	session: {
		strategy: 'jwt',
	},
	pages: {
		signIn: '/auth/login',
		error: '/auth/login',
	},
	secret: process.env.NEXTAUTH_SECRET,
	providers: [
		{
			id: 'custom-credentials',
			name: 'Custom Credentials',
			type: 'credentials',
			credentials: {
				username: { label: 'Username', type: 'text' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials) {
				try {
					const response = await axios.post(`${process.env.NEXTAUTH_URL}/api/sign-in`, {
						username: credentials?.username,
						password: credentials?.password,
					});

					if (response.status === 200) {
						return response.data;
					}

					return null;
				} catch (error) {
					throw new Error('Unauthorized : ' + error);
				}
			},
		},
	],
	callbacks: {
		jwt: async ({ token, user }) => {
			if (user) {
				token.role = user.role;
				token.accessToken = user.accessToken;
			}
			return token;
		},
		session: async ({ session, token }: { session: any; token: any }) => {
			if (session.user) {
				session.user.role = token.role;
				session.accessToken = token.accessToken;
			}

			return session;
		},
	},
};
