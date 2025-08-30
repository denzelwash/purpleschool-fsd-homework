// import { http } from '@/shared/api'
import type { Course } from '../model/types'
import { MOCK_COURSES } from '../model'

export const fetchCourses = async (): Promise<Course[]> => {
	// const response = await http.get<Course[]>('/courses')
	// return response.data
	return await new Promise((res) => {
		setTimeout(() => {
			res(MOCK_COURSES)
		}, 1000)
	})
}
