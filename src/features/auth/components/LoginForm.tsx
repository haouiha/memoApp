import FormItem from '@/components/FormItem';
import { useForm } from 'react-hook-form';
import { styled } from 'styled-components';

export interface LoginFormFields {
	username: string;
	password: string;
}

interface LoginFormProps {
	onSubmit: (data: LoginFormFields) => void;
}

const LoginForm = ({ onSubmit }: LoginFormProps) => {
	const { register, handleSubmit, formState } = useForm<LoginFormFields>();

	return (
		<FormContainer onSubmit={handleSubmit(onSubmit)}>
			<FormItem label="บัญชีพนักงาน" errorMessage={formState.errors.username?.message}>
				<Input {...register('username', { required: true })} type="text" id="username" />
			</FormItem>
			<FormItem label="รหัสผ่าน" errorMessage={formState.errors.password?.message}>
				<Input {...register('password', { required: true })} type="password" id="password" />
			</FormItem>

			<LoginButton type="submit" disabled={formState.isSubmitting}>
				ค้นหา
			</LoginButton>
		</FormContainer>
	);
};

export default LoginForm;

const FormContainer = styled.form`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

const Input = styled.input`
	padding: 10px;
	border: 0px;
	border-radius: 6px;
	background-color: #393937;
	color: #fff;
`;

const LoginButton = styled.button`
	width: 100%;
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 6px;

	&:hover {
		background-color: #969696;
		border: 1px solid #969696;
	}
`;
