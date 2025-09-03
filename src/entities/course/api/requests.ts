// import { http } from '@/shared/api'
import type { Course, CourseCount, FetchCoursesParams } from '../model/types'
import { MOCK_COURSES, MOCK_COURSE_COUNT } from '../model'

export const fetchCourses = async (params?: FetchCoursesParams): Promise<Course[]> => {
	// const queryParams = new URLSearchParams()
	// if (params?.directions && !params.directions.includes('All')) {
	// 	params.directions.forEach((direction) => queryParams.append('direction', direction))
	// }
	// if (params?.trainingType && params.trainingType !== 'All') {
	// 	queryParams.append('type', params.trainingType)
	// }
	// const queryString = queryParams.toString()
	// const url = queryString ? `/api/courses?${queryString}` : '/api/courses'
	// const response = await http.get<Course[]>(url)
	// return response.data
	console.log(params)
	return await new Promise((res) => {
		setTimeout(() => {
			res(MOCK_COURSES)
		}, 1000)
	})
}

export const fetchCoursesCount = async (): Promise<CourseCount[]> => {
	// const response = await http.get<Tab[]>('/courses/count')
	// return response.data
	return await new Promise((res) => {
		setTimeout(() => {
			res(MOCK_COURSE_COUNT)
		}, 1000)
	})
}
