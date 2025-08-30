// import { http } from '@/shared/api'
import type { Stats } from '../model/types'
import { MOCK_STAT } from '../model'

export const fetchStat = async (): Promise<Stats[]> => {
	// const response = await http.get<Course[]>('/stats')
	// return response.data
	return await new Promise((res) => {
		setTimeout(() => {
			res(MOCK_STAT)
		}, 1000)
	})
}
