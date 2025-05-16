'use client';

import { queryClient } from '@/libs';
import axiosClient from '@/libs/axios';
import { useMutation } from '@tanstack/react-query';

interface UseCreateMemoCardProps {
	role?: string;
}

const useCreateMemoCard = ({ role = 'USER' }: UseCreateMemoCardProps) => {
	return useMutation({
		mutationKey: ['createMemoCard'],
		mutationFn: async (content: string) => {
			try {
				const response = await axiosClient.post('api/memo-cards', { content, createdBy: role });

				return response.data;
			} catch (error) {
				console.log('createMemoCard error', error);
			}
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['memoCards'] });
		},
	});
};

export default useCreateMemoCard;
