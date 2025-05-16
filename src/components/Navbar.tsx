import { signOut, useSession } from 'next-auth/react';
import React, { useMemo } from 'react';
import styled from 'styled-components';
import { MdLogout } from 'react-icons/md';

const Navbar = () => {
	const { data: session } = useSession();

	const userEmail = useMemo(() => `${session?.user.role.toLocaleLowerCase()}@balerion.co.th`, [session]);

	const handleLogout = () => {
		signOut();
	};

	return (
		<NavbarContainer>
			<UserEmail>{userEmail}</UserEmail>
			<LogoutIcon onClick={handleLogout} />
		</NavbarContainer>
	);
};

export default Navbar;

const NavbarContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	gap: 12px;
`;

const UserEmail = styled.span`
	font-size: 16px;
	color: #fff;
	font-weight: 400;
`;

const LogoutIcon = styled(MdLogout)`
	font-size: 24px;
	color: #fff;
	cursor: pointer;
`;
