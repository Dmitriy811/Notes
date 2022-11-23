import axios from 'axios'

const instance = axios.create({
	baseURL: 'http://localhost:3001',
})

export const getNotes = {
	all() {
		return instance.get('/Notes')
	},
}
