import { FC, useEffect, useState } from 'react'
import { INotesEdition } from '../../interfaces'
import {
	Body,
	ButtonPosition,
	NoteEditor,
	Notification,
	Tags,
	Title,
} from './NotesEdition.styled'
import { HiAnnotation } from 'react-icons/hi'
import { AiOutlineSave, AiOutlineCloudServer } from 'react-icons/ai'
import { BsFillTrashFill } from 'react-icons/bs'
import { MyButton } from '../UI/MyButton'

export const NotesEdition: FC<INotesEdition> = ({
	note,
	editingNote,
	remove,
}) => {
	const [noteContent, setNoteContent] = useState<{
		title: string
		body: string
	}>({
		title: '',
		body: '',
	})
	useEffect(() => {
		if (note) {
			setNoteContent({ title: note.title, body: note.body })
		}
	}, [note])

	if (!note)
		return (
			<Notification>
				<HiAnnotation size={'50px'} />
				<h1>Let's start :3</h1>
			</Notification>
		)

	const save = () => {
		const newNote = {
			...note,
			title: noteContent.title,
			body: noteContent.body,
			lastModify: Date.now(),
		}
		editingNote(newNote, note.id)
	}

	return (
		<NoteEditor>
			<Title
				type='text'
				value={noteContent.title}
				onChange={e => {
					setNoteContent({ ...noteContent, title: e.target.value })
				}}
			/>
			<Body
				name='body'
				value={noteContent.body}
				onChange={e => {
					setNoteContent({ ...noteContent, body: e.target.value })
				}}
			/>
			<ButtonPosition>
				<MyButton onClick={() => save()}>
					<AiOutlineSave size={'40px'} />
				</MyButton>
				<MyButton onClick={() => save()}>
					<AiOutlineCloudServer size={'40px'} />
				</MyButton>
				<MyButton onClick={() => remove(note.id)}>
					<BsFillTrashFill size={'35px'} />
				</MyButton>
			</ButtonPosition>
			{note.tags.length !== 0 && (
				<Tags>
					{note.tags.map(tag => (
						<li>{tag}</li>
					))}
				</Tags>
			)}
		</NoteEditor>
	)
}
