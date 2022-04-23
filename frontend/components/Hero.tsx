import Link from 'next/link'
import styled from 'styled-components'

const Container = styled.div`
	height: 70vh;
	display: flex;
	justify-content: center;
	align-items: center;
`
const LoginLink = styled(Link)`
	color: #82ce10 !important;
`

const Hero = () => {
	return (
		<Container>
			<h1>
				Please <LoginLink href='/login'>login</LoginLink> for see the goals
			</h1>
		</Container>
	)
}

export default Hero
