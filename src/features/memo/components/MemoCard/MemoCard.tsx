import { MemoCardWithCardNumber } from '@/features/memo/types';
import React, { useMemo } from 'react';
import { CardBox, Content, CardCreatedByTag, CardTitle, CardInfoContainer, InfoContainer, NewTag, CardWrapper } from './MemoCard.styled';

interface MemoCardProps {
	memoCard: MemoCardWithCardNumber;
	isNew?: boolean;
}

const MemoCard = ({ memoCard, isNew = false }: MemoCardProps) => {
	const title = useMemo(() => {
		return memoCard.createdBy === 'ADMIN' ? 'ADMIN' : 'MEMO';
	}, [memoCard.createdBy]);

	return (
		<CardWrapper>
			{isNew && <NewTag>New</NewTag>}
			<CardBox>
				<CardInfoContainer>
					<InfoContainer>
						<CardTitle>{`${title}-${memoCard.cardNumber}`}</CardTitle>
						<CardCreatedByTag role={memoCard.createdBy}>{memoCard.createdBy}</CardCreatedByTag>
					</InfoContainer>
				</CardInfoContainer>
				<Content>{memoCard.content}</Content>
			</CardBox>
		</CardWrapper>
	);
};

export default MemoCard;
