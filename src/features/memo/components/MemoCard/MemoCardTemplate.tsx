import React, { useCallback, useMemo } from 'react';
import { CardBox, CardCreatedByTag, CardTitle, CardInfoContainer, Textarea, SaveButton, InfoContainer } from './MemoCard.styled';
import { useForm } from 'react-hook-form';

export interface CreateMemoCardFormFields {
	content: string;
}
interface MemoCardProps {
	currentNumber: number;
	role?: string;
	onSubmit: (data: CreateMemoCardFormFields) => void;
	onCancel: () => void;
}

const MemoCardTemplate = ({ currentNumber, role = 'USER', onSubmit, onCancel }: MemoCardProps) => {
	const { register, handleSubmit, reset, watch } = useForm<CreateMemoCardFormFields>();

	const title = useMemo(() => {
		return role === 'ADMIN' ? 'ADMIN' : 'MEMO';
	}, [role]);

	const handleSave = (data: CreateMemoCardFormFields) => {
		onSubmit(data);
		reset();
		onCancel();
	};

	const handleCancel = useCallback(() => {
		const isEditing = watch('content');
		if (!isEditing) {
			onCancel();
		}
	}, [watch, onCancel]);

	return (
		<CardBox>
			<CardInfoContainer>
				<InfoContainer>
					<CardTitle>{`${title}-${currentNumber + 1}`}</CardTitle>
					<CardCreatedByTag role={role}>{role}</CardCreatedByTag>
				</InfoContainer>

				<SaveButton onClick={handleSubmit(handleSave)}>save</SaveButton>
			</CardInfoContainer>
			<Textarea {...register('content')} placeholder="Type something..." onBlur={handleCancel} autoFocus />
		</CardBox>
	);
};

export default MemoCardTemplate;
