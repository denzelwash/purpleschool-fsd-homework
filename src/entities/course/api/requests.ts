// import { http } from '@/shared/api'
import type { Course, CourseCount } from '../model/types'
import { MOCK_COURSES, MOCK_COURSE_COUNT } from '../model'

export const fetchCourses = async (): Promise<Course[]> => {
	// const response = await http.get<Course[]>('/courses')
	// return response.data
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
