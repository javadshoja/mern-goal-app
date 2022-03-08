import styled from 'styled-components'

export const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px 0;
	border-bottom: 1px solid #e6e6e6;
	margin-bottom: 60px;
`

export const Items = styled.ul`
	display: flex;
	align-items: center;
	justify-content: space-between;
`

export const Item = styled.li`
	margin-left: 20px;
`

export const NavLink = styled.a`
	display: flex;
	align-items: center;
	cursor: pointer;

	&:hover {
		color: #777;
	}

	svg {
		margin-right: 5px;
	}
`
