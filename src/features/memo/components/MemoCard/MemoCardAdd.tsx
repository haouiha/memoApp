import React from 'react';
import { AddButton, CardBox } from './MemoCard.styled';

interface MemoCardAddProps {
	onClick: () => void;
}

const MemoCardAdd = ({ onClick }: MemoCardAddProps) => {
	return <AddButton onClick={onClick}>+</AddButton>;
};

export default MemoCardAdd;
