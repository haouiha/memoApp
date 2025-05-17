'use client';

import { signIn } from 'next-auth/react';
import LoginForm, { LoginFormFields } from '../components/LoginForm';
import styled from 'styled-components';
import { media } from '@/styles/theme';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

const LoginPage = () => {
	const searchParams = useSearchParams();
	const callbackUrl = searchParams.get('callbackUrl');
	const router = useRouter();

	const onSubmit = useCallback(
		async (data: LoginFormFields) => {
			try {
				const result = await signIn('custom-credentials', {
					username: data.username,
					password: data.password,
					redirect: false,
				});

				if (result?.ok) {
					router.push(callbackUrl || '/');
				}
			} catch (error) {
				console.error('login error', error);
			}
		},
		[callbackUrl, router]
	);

	return (
		<MainContainer>
			<LoginContainer>
				<LoginTitle>เข้าสู่ระบบ</LoginTitle>
				<LoginForm onSubmit={onSubmit} />
			</LoginContainer>
		</MainContainer>
	);
};

export default LoginPage;

const MainContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
`;

const LoginContainer = styled.div`
	max-width: 400px;
	width: 100%;
	${media.mobile} {
		max-width: 80%;
	}
`;

const LoginTitle = styled.h1`
	font-weight: 400;
	color: #fff;
`;
