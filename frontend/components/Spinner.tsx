import styled from 'styled-components'

const Container = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background-color: rgba(23, 35, 75, 0.4);
	z-index: 5000;
	display: flex;
	justify-content: center;
	align-items: center;
`

const LoadingSpinner = styled.div`
	width: 64px;
	height: 64px;
	border: 8px solid;
	border-color: #17234b transparent #fff transparent;
	border-radius: 50%;
	animation: spin 1.2s linear infinite;

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`

function Spinner() {
	return (
		<Container>
			<LoadingSpinner />
		</Container>
	)
}

export default Spinner
