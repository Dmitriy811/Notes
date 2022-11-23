import styled from 'styled-components'

export const ListElement = styled.li<{ active: Boolean }>`
	display: grid;
	grid-template-columns: auto 1fr;
	grid-template-rows: auto 1fr;
	position: relative;
	padding: ${props => (props.active ? '15px 15px 15px 10px' : '15px')};
	gap: 5px 10px;
	cursor: pointer;
	grid-template-areas:
		'time title'
		'. description';
	border-left: ${props =>
		props.active ? '5px solid var(--bg-color-active)' : 'none'};
	background-color: ${props =>
		props.active ? 'var(--bg-color-secondary)' : 'transparent'};
	&:before {
		content: '';
		display: block;
		width: 90%;
		height: 1px;
		background: black;
		position: absolute;
		bottom: 0;
		right: 0;
	}
`

export const Time = styled.div`
	grid-area: time;
	color: var(--text-color-secondary);
`
export const H3 = styled.h3`
	grid-area: title;
`
export const P = styled.p`
	grid-area: description;
	color: var(--text-color-secondary);
`
