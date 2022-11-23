import { FC, useMemo, useState } from 'react'
import { getLastModify } from '../../../helpers/getTime'
import { INotesListItems } from '../../../interfaces'
import { H3, ListElement, P, Time } from './NotesListItems.styled'

export const NotesListItems: FC<INotesListItems> = ({
	note,
	activeId,
	...props
}) => {
	const [data, setData] = useState<string>('0s')

	useMemo(() => {
		setData(getLastModify(note.lastModify))
	}, [activeId])

	return (
		<ListElement active={activeId === note.id} {...props}>
			<Time>{data}</Time>
			<H3>{note.title}</H3>
			<P>{note.body}</P>
		</ListElement>
	)
}
