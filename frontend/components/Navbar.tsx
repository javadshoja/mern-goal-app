import Link from 'next/link'
import { HiOutlineLogin, HiOutlineLogout, HiOutlineUser } from 'react-icons/hi'
import { Nav, Logo, Items, Item, NavLink } from './styles'

function Header() {
	return (
		<Nav>
			<Logo>
				<Link href='/'>GoalSetter 🎯</Link>
			</Logo>
			<Items>
				<Item>
					<Link href='/login'>
						<NavLink>
							<HiOutlineLogin /> Login
						</NavLink>
					</Link>
				</Item>
				<Item>
					<Link href='/register'>
						<NavLink>
							<HiOutlineUser /> Register
						</NavLink>
					</Link>
				</Item>
			</Items>
		</Nav>
	)
}

export default Header
