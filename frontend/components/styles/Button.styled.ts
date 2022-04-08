import styled from 'styled-components'

const Button = styled.button`
	padding: 10px 20px;
	border: 1px solid #000;
	border-radius: 5px;
	background: #2b365a;
	color: #fff;
	font-size: 16px;

	cursor: pointer;
	text-align: center;
	appearance: button;
	display: flex;
	align-items: center;
	justify-content: center;

	svg {
		margin-right: 8px;
	}
`
export default Button

export const BtnBlock = styled(Button)`
	font-weight: 700;
	width: 100%;
	margin-bottom: 20px;
`
export const BtnReverse = styled(Button)`
	background: #fff;
	color: #000;
`
