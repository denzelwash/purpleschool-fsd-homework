// import { http } from '@/shared/api'
import type { Stat } from '../model/types'
import { MOCK_STAT } from '../model'

export const fetchStat = async (): Promise<Stat[]> => {
	// const response = await http.get<Course[]>('/stat')
	// return response.data
	return await new Promise((res) => {
		setTimeout(() => {
			res(MOCK_STAT)
		}, 1000)
	})
}
