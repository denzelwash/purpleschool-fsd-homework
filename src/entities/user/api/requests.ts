// import { http } from '@/shared/api'
import type { Stats, User } from '../model/types'
import { MOCK_STATS, MOCK_USER } from '../model'

export const fetchUser = async (): Promise<User> => {
	// const response = await http.get<User>('/user')
	// return response.data
	return await new Promise((res) => {
		setTimeout(() => {
			res(MOCK_USER)
		}, 1000)
	})
}

export const fetchStats = async (): Promise<Stats[]> => {
	// const response = await http.get<Course[]>('/stats')
	// return response.data
	return await new Promise((res) => {
		setTimeout(() => {
			res(MOCK_STATS)
		}, 1000)
	})
}
