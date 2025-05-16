'use client';

import { useCreateMemoCard, useGetMemoCard } from '@/features/memo/hooks';
import { useSession } from 'next-auth/react';
import { useMemo, useState } from 'react';
import styled from 'styled-components';
import { media } from '@/styles/theme';
import { MemoCard, MemoCardAdd, MemoCardTemplate } from '@/features/memo/components';
import { CreateMemoCardFormFields } from '@/features/memo/components/MemoCard/MemoCardTemplate';

const MemoPage = () => {
	const { data: session } = useSession();
	const { data: memoCards } = useGetMemoCard({ role: session?.user.role });
	const { mutate: createMemoCard } = useCreateMemoCard({ role: session?.user.role });

	const [isDrafting, setIsDrafting] = useState(false);

	const currentNumber = useMemo(() => {
		return (
			memoCards?.reduce((count, card) => {
				if (card.createdBy === session?.user.role) {
					return count + 1;
				}
				return count;
			}, 0) || 0
		);
	}, [memoCards, session?.user.role]);

	const onSubmit = (data: CreateMemoCardFormFields) => {
		createMemoCard(data.content);
	};

	const handleAddMemoCardClick = () => {
		setIsDrafting(true);
	};

	const handleCancelDrafting = () => {
		setIsDrafting(false);
	};

	return (
		<PageContainer>
			<TitleContainer>
				<Title>{`Memo Cards`}</Title>
				<Counter>{`(${memoCards?.length || 0}${isDrafting ? '+1' : ''})`}</Counter>
			</TitleContainer>

			<CardContainer>
				{memoCards?.map((card) => {
					return <MemoCard key={card.id} memoCard={card} isNew={card.isNew} />;
				})}
				{isDrafting ? (
					<MemoCardTemplate
						currentNumber={currentNumber}
						role={session?.user.role}
						onSubmit={onSubmit}
						onCancel={handleCancelDrafting}
					/>
				) : (
					<MemoCardAdd onClick={handleAddMemoCardClick} />
				)}
			</CardContainer>
		</PageContainer>
	);
};

export default MemoPage;

const PageContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
	align-items: center;
`;

const TitleContainer = styled.div`
	display: flex;
	gap: 4px;
	align-items: baseline;
`;

const Title = styled.span`
	font-size: 64px;
	font-weight: bold;
	color: #fff;
`;

const Counter = styled.span`
	font-size: 24px;
	color: #fff;
`;

const CardContainer = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 16px;
	${media.mobile} {
		display: flex;
		flex-direction: column;
		margin: auto;
	}
`;
