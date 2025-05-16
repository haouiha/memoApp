// In Next.js, this file would be called: app/providers.jsx
'use client';

import { PropsWithChildren } from 'react';

import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/libs';

const Providers = ({ children }: PropsWithChildren) => {
	return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default Providers;
