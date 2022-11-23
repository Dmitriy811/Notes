import { FC, useState } from 'react'
import { INotes, INotesList } from '../../interfaces'
import { MyInput } from '../UI/MyInput'
import { IoCreateOutline } from 'react-icons/io5'
import { MyButton } from '../UI/MyButton'
import { Head, Wrapper } from './NotesList.style'
import { NotesListItems } from '../UI/NotesListItems'
import uuid from 'react-uuid'
import { useSortedInpNotes } from '../../hooks'

export const NotesList: FC<INotesList> = ({
	notes,
	tag,
	activeNote,
	setActiveNote,
	addNewNote,
}) => {
	const setNote = (id: number): void => setActiveNote(id)
	const [query, setQuery] = useState<string>('')

	const createNewNoteObject = (): void => {
		const newNote = {
			id: notes.length,
			title: 'New title',
			body: 'Hey',
			tags: ['video', 'games'],
			lastModify: Date.now(),
		}
		addNewNote(newNote)
	}

	return (
		<Wrapper>
			<Head>
				<MyInput value={query} setValue={setQuery} />
				<MyButton onClick={createNewNoteObject}>
					<IoCreateOutline size={'32px'} />
				</MyButton>
			</Head>

			<ul>
				{useSortedInpNotes(notes, tag, query).map(note => (
					<NotesListItems
						key={uuid()}
						onClick={() => setNote(note.id)}
						note={note}
						activeId={activeNote}
					/>
				))}
			</ul>
		</Wrapper>
	)
}
