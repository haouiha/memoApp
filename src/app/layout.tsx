import { NextAuthProvider, QueryClientProvider } from '@/context';
import StyledComponentsProvider from '@/context/StyledComponentsProvider';
import { Metadata } from 'next';
import { ReactNode } from 'react';
import StyledComponentsRegistry from '@/libs/styled-components';

import '@/styles/globals.css';

export const metadata: Metadata = {
	title: 'Memo App',
	description: 'Memo App :: Oui',
};

interface RootLayoutProps {
	children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
	return (
		<html lang="en">
			<body>
				<QueryClientProvider>
					<NextAuthProvider>
						<StyledComponentsRegistry>
							<StyledComponentsProvider>{children}</StyledComponentsProvider>
						</StyledComponentsRegistry>
					</NextAuthProvider>
				</QueryClientProvider>
			</body>
		</html>
	);
};

export default RootLayout;
