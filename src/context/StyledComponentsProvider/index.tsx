'use client';

import { theme } from '@/styles/theme';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

interface StyledComponentsProviderProps {
	children: ReactNode;
}

const StyledComponentsProvider = ({ children }: StyledComponentsProviderProps) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default StyledComponentsProvider;
