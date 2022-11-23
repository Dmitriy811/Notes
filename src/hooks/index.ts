import { useMemo } from 'react'
import { INotes } from '../interfaces'

export const useSortedNotes = (notes: INotes[], tag: string) => {
	const sortedNotes = useMemo(() => {
		if (tag === 'Notes') return notes
		if (tag) return [...notes].filter(note => note.tags.includes(tag))
		return notes
	}, [notes, tag])

	return sortedNotes
}

export const useSortedInpNotes = (
	notes: INotes[],
	tag: string,
	query: string
) => {
	const sortedPosts = useSortedNotes(notes, tag)
	const sortedInpNotes = useMemo(() => {
		return sortedPosts.filter(note =>
			note.title.toLowerCase().includes(query.toLowerCase())
		)
	}, [sortedPosts, query])
	return sortedInpNotes
}
