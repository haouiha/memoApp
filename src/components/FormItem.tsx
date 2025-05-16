import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

interface FormItemProps {
	label: string;
	children: ReactNode;
	errorMessage?: string;
}

const FormItem: FC<FormItemProps> = ({ label, children, errorMessage }) => {
	return (
		<FormItemContainer>
			<FormItemLabel>{label}</FormItemLabel>
			{children}
			{errorMessage && <p>{errorMessage}</p>}
		</FormItemContainer>
	);
};

export default FormItem;

const FormItemContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 6px;
`;

const FormItemLabel = styled.label`
	font-size: 12px;
	font-weight: 400;
	color: #fff;
`;
