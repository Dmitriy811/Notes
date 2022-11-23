import { INotes } from '../interfaces'

export const getTags = (notes: INotes[] | [] = []): string[] | [] => {
	if (notes?.length === 0) return []
	const newArray: string[] = [...notes].reduce((acc, el) => {
		if (el.tags?.length === 0) return [...acc]
		el.tags.filter(tag => !acc.includes(tag))
		return [...acc, ...el.tags.filter(tag => !acc.includes(tag))]
	}, [] as string[])

	return newArray
}
