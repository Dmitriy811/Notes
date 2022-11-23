import styled from 'styled-components'

export const NoteEditor = styled.div`
	width: 80%;
	display: grid;
	grid-template-rows: auto 1fr auto;
	margin: 10px auto 0;
	color: white;
	position: relative;
`

export const Title = styled.input`
	outline: none;
	border: none;
	font-size: 2rem;
	background-color: transparent;
	color: inherit;
	margin-bottom: 10px;
	width: 100%;
`

export const Body = styled.textarea`
	width: 100%;
	height: 80%;
	outline: none;
	border: none;
	color: inherit;
	background-color: transparent;
	resize: none;
`

export const Notification = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	row-gap: 10px;
`

export const ButtonPosition = styled.div`
	position: absolute;
	top: 0px;
	right: -50px;
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	row-gap: 5px;
`

export const Tags = styled.ul`
	display: flex;
	gap: 10px;
	border-top: 2px solid black;
	padding: 10px;
	width: 100%;
	height: auto;
	li {
		display: block;
		background-color: var(--bg-tag-color);
		border-radius: 12px;
		padding: 5px;
		border: 1px solid black;
	}
`
