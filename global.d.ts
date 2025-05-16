import { type DefaultSession, type DefaultUser } from 'next-auth';

declare module 'next-auth' {
	interface Session extends DefaultSession {
		user: DefaultSession['user'] & {
			role: string;
		};
		accessToken: string;
	}
	interface User extends DefaultUser {
		role: string;
		accessToken: string;
	}
}

declare module 'next-auth/jwt' {
	interface JWT {
		role: string;
		accessToken: string;
	}
}
