import styled from 'styled-components'

export const Wrapper = styled.div`
	padding: 30px 10px 0 10px;
	background-color: var(--bg-color-secondary);
	border-right: 2px solid black;
	ul {
		display: flex;
		flex-direction: column;
		li:first-child {
			margin-bottom: 10px;
		}
	}
`
