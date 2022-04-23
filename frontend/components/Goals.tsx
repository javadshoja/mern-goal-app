import React from 'react'
import styled from 'styled-components'
import Goal from './Goal'

export default function Goals({ goals }: any) {
	return (
		<>
			<GoalsContainer>
				{goals.map((goal: any) => (
					<Goal key={goal.id} goal={goal} />
				))}
			</GoalsContainer>
		</>
	)
}

const GoalsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 10px;
`
