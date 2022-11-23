import { useEffect, useMemo, useState } from 'react'

import { NotesEdition } from './components/NotesEdition'
import { NotesList } from './components/NotesList'
import { TagList } from './components/TagList'

import { getNotes } from './api/getNotes'
import { getTags } from './helpers/getTags'
import { INotes } from './interfaces'

import { Container } from './styles/App.styled'

export const App = () => {
	const [notes, setNotes] = useState<INotes[] | []>([])
	const [tags, setTags] = useState<string[]>([])
	const [tagActive, setTagActive] = useState<string>('Notes')
	const [activeIdNote, setActiveIdNote] = useState<number | null>(null)
	const [activeNode, setActiveNode] = useState<INotes | null>(null)

	useEffect(() => {
		getNotes.all().then(resp => {
			setNotes(resp.data)
			setTags(['Notes', ...getTags(resp.data)])
		})
	}, [])

	useMemo(() => {
		setActiveNode([...notes].filter(note => note.id === activeIdNote)[0])
	}, [notes, activeIdNote])

	const editingNote = (newNote: INotes) =>
		setNotes([newNote, ...notes.filter(note => note !== activeNode)])

	const addNewNote = (newNote: INotes) => {
		setNotes([newNote, ...notes])
		setActiveIdNote(newNote.id)
	}

	const remove = (id: number) => {
		setNotes([...notes].filter(note => note.id !== id))
	}

	return (
		<Container>
			<TagList
				tags={tags}
				tagActive={tagActive}
				setTagActive={setTagActive}
				setActiveIdNote={setActiveIdNote}
			/>
			<NotesList
				notes={notes}
				tag={tagActive}
				activeNote={activeIdNote}
				setActiveNote={setActiveIdNote}
				addNewNote={addNewNote}
			/>

			<NotesEdition
				note={activeNode}
				editingNote={editingNote}
				remove={remove}
			/>
		</Container>
	)
}
