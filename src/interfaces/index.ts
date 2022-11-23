import { ReactNode } from 'react'

export interface INotes {
	id: number
	title: string
	body: string
	tags: string[]
	lastModify?: number
}

export interface ITagList {
	tags: string[]
	tagActive: string
	setTagActive: (tag: string) => void
	setActiveIdNote: (tag: null) => void
}

export interface IMyInput {
	value: string
	setValue: (value: string) => void
}

export interface ILi {
	active: Boolean
	children: ReactNode
	onClick: React.MouseEventHandler<HTMLLIElement>
}

export interface INotesList {
	notes: INotes[]
	tag: string
	activeNote: number | null
	setActiveNote: (id: number) => void
	addNewNote: (newNote: INotes) => void
}

export interface IMyButton {
	children: ReactNode
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export interface INotesListItems {
	note: INotes
	activeId: number | null
	onClick: React.MouseEventHandler<HTMLLIElement>
}

export interface INotesEdition {
	note: INotes | null
	editingNote: (newNote: INotes, id: number) => void
	remove: (id: number) => void
}

export interface INoteContent {
	title: string
	body: string
}
