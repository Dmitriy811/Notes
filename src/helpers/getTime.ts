export const getLastModify = (ms: number | undefined): string => {
	if (ms === undefined) return 'Date un found'

	const lastModifyMs = Date.now() - ms
	if (lastModifyMs / 1000 <= 60) return (lastModifyMs / 1000).toFixed() + 's'
	if (lastModifyMs / 60000 <= 60) return (lastModifyMs / 60000).toFixed() + 'm'
	if (lastModifyMs / 3600000 <= 24)
		return (lastModifyMs / 3600000).toFixed() + 'h'
	if (lastModifyMs / 86400000 <= 50)
		return (lastModifyMs / 86400000).toFixed() + 'd'
	else return 'long'
}
