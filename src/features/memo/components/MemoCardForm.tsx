import React from 'react';
import { useForm } from 'react-hook-form';

type MemoCardFormFields = {
	content: string;
};

interface MemoCardFormProps {
	onSubmit: (data: MemoCardFormFields) => void;
}

const MemoCardForm = ({ onSubmit }: MemoCardFormProps) => {
	const { register, handleSubmit } = useForm<MemoCardFormFields>();

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div>
				<label htmlFor="content">content:</label>
				<input {...register('content')} type="text" id="content" />
			</div>
			<button type="submit">Add Memo Card</button>
		</form>
	);
};

export default MemoCardForm;
