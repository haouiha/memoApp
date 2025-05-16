'use client';

import { signIn } from 'next-auth/react';
import LoginForm, { LoginFormFields } from '../components/LoginForm';
import styled from 'styled-components';
import { media } from '@/styles/theme';

const LoginPage = () => {
	const onSubmit = async (data: LoginFormFields) => {
		try {
			await signIn('custom-credentials', {
				username: data.username,
				password: data.password,
				redirect: true,
				callbackUrl: '/',
			});
		} catch (error) {
			console.error('login error', error);
		}
	};

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
