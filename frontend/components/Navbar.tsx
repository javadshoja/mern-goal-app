import Link from 'next/link'
import { useRouter } from 'next/router'
import { HiOutlineLogin, HiOutlineLogout, HiOutlineUser } from 'react-icons/hi'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { RootState } from '../app/store'
import { logout, reset } from '../features/user/userSlice'
import { Nav, Logo, Items, Item, NavLink, Button } from './styles'

function Header() {
	const router = useRouter()

	const dispatch = useDispatch()

	const user = useSelector((state: RootState) => state.user.user)

	const OnLogout = () => {
		dispatch(logout())
		dispatch(reset())
		router.push('/')
	}

	return (
		<Nav>
			<Logo>
				<Link href='/'>GoalSetter 🎯</Link>
			</Logo>
			<Items>
				{user ? (
					<>
						<Item>
							<Button onClick={OnLogout}>
								<HiOutlineLogout /> Logout
							</Button>
						</Item>
					</>
				) : (
					<>
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
					</>
				)}
			</Items>
		</Nav>
	)
}

export default Header
