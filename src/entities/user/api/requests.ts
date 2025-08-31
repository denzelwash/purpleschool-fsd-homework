// import { http } from '@/shared/api'
import type { Stats } from '../model/types'
import { MOCK_STATS } from '../model'

export const fetchStats = async (): Promise<Stats[]> => {
	// const response = await http.get<Course[]>('/stats')
	// return response.data
	return await new Promise((res) => {
		setTimeout(() => {
			res(MOCK_STATS)
		}, 1000)
	})
}
