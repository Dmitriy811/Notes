import styled from 'styled-components'

export const Wrapper = styled.div`
	border-right: 2px solid black;
	display: grid;
	grid-template-rows: auto 1fr;
	height: 100vh;
	ul {
		width: 100%;
		height: 100%;
		overflow-y: scroll;
	}
`

export const Head = styled.div`
	display: flex;
	width: 100%;
	padding: 10px;
	justify-content: space-between;
	column-gap: 5px;
	align-items: center;
	border-bottom: 2px solid black;
`
