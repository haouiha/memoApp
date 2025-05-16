'use client';

import axiosClient from '@/libs/axios';
import { useQuery } from '@tanstack/react-query';
import { MemoCardWithCardNumber } from '@/features/memo/types';

interface UseGetMemoCardProps {
	role?: string;
}

const useGetMemoCard = ({ role = 'USER' }: UseGetMemoCardProps) => {
	const query = useQuery<MemoCardWithCardNumber[]>({
		queryKey: ['memoCards'],
		queryFn: async () => {
			try {
				const response = await axiosClient.get('api/memo-cards', {
					params: {
						createdBy: role,
					},
				});

				return response.data;
			} catch (error) {
				console.log('getMemoCards error', error);
			}
		},
		select: (data) => {
			const isAdmin = role === 'ADMIN';

			const withCardNumber = ['ADMIN', 'USER']
				.flatMap((role) => {
					return data
						.filter((card) => card.createdBy === role)
						.map((card, index, array) => ({ ...card, cardNumber: array.length - index }));
				})
				.sort((a, b) => {
					const dateA = new Date(a.createdAt).getTime();
					const dateB = new Date(b.createdAt).getTime();

					return isAdmin ? dateB - dateA : dateA - dateB;
				})
				.map((card, index, array) => ({ ...card, isNew: isAdmin ? index === 0 : index === array.length - 1 }));

			return withCardNumber;
		},
	});

	return query;
};

export default useGetMemoCard;
