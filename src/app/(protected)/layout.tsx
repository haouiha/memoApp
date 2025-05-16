'use client';
import Navbar from '@/components/Navbar';
import { media } from '@/styles/theme';
import { useSession } from 'next-auth/react';
import { redirect, usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import styled from 'styled-components';

interface ProtectedLayoutProps {
	children: ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
	const pathname = usePathname();

	const { data: session } = useSession({
		required: true,
		onUnauthenticated: () => {
			redirect(`/auth/login?callbackUrl=${pathname}`);
		},
	});

	if (!session) return null;

	return (
		<MainContainer>
			<Navbar />
			{children}
		</MainContainer>
	);
};

export default ProtectedLayout;

const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 10px;
	margin: auto;
	gap: 60px;
	max-width: ${({ theme }) => theme.breakpoints.desktop};
	${media.mobile} {
		max-width: ${({ theme }) => theme.breakpoints.mobile};
	}
`;
