import { media } from '@/styles/theme';
import styled from 'styled-components';

export const CardBox = styled.div`
	height: 160px;
	display: flex;
	flex-direction: row;
	padding: 18px 14px;
	border-radius: 10px;
	background-color: #ffffff;
	gap: 24px;
	overflow: hidden;

	${media.mobile} {
		max-width: 450px;
		width: 80%;
		margin: auto;
	}
`;

export const CardInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const CardTitle = styled.div`
	font-weight: bold;
	color: #7f7f7f;
	font-size: 15px;
`;

export const CardCreatedByTag = styled.div<{ role: string }>`
	background-color: ${({ role }) => (role === 'ADMIN' ? '#ff6c6f' : '#62aefd')};
	text-align: center;
	font-weight: 400;
	color: #ffffff;
	border-radius: 15px;
	font-size: 12px;
	width: 61px;
	height: 30px;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Content = styled.div`
	flex: 1;
	-webkit-line-clamp: 10;
	-webkit-box-orient: vertical;
	display: -webkit-box;
	overflow: hidden;
	font-size: 14px;
`;

export const Textarea = styled.textarea`
	flex: 1;
	box-sizing: border-box;
	resize: none;
	border: none;
	background-color: #f3f3f4;
	border-radius: 10px;
	padding: 10px;
`;

export const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

export const SaveButton = styled.div`
	text-align: center;
	text-decoration: underline;
	cursor: pointer;
	font-size: 16px;
`;

export const AddButton = styled(CardBox)`
	cursor: pointer;
	justify-content: center;
	align-items: center;
	font-size: 36px;
	font-weight: bold;
	background-color: #b9baba;
`;

export const NewTag = styled.div`
	background-color: #8c6cff;
	height: 34px;
	width: 56px;
	color: #ffffff;
	position: absolute;
	top: -16px;
	right: -12px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 18px;
	font-size: 12px;
`;

export const CardWrapper = styled.div`
	position: relative;
`;
