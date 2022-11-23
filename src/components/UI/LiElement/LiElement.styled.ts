import styled from 'styled-components'

export const Li = styled.li<{ active: Boolean }>`
	display: flex;
	justify-content: flex-start;
	column-gap: 10px;
	align-items: center;
	cursor: pointer;
	min-width: 80%;
	background-color: ${props =>
		props.active ? 'var(--bg-color-active)' : 'transparent'};
	padding: 5px 5px 5px 20px;
	width: 100%;
	border-radius: 5px;
	color: var(--text-color-primary);
`
