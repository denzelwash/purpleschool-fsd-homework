import { create } from 'zustand'
import { fetchCourses, fetchCoursesCount } from '../api/requests'
import type { Course, CourseCount, FetchCoursesParams } from './types'

interface CourseState {
	courses: Course[]
	isLoadingCourses: boolean
	errorCourses: Error | null

	coursesCount: CourseCount[]
	isLoadingCoursesCount: boolean
	errorCoursesCount: Error | null

	loadCourses: (params?: { params?: FetchCoursesParams; force: boolean }) => Promise<void>
	loadCoursesCount: (params?: { force: boolean }) => Promise<void>
}

export const useCourseStore = create<CourseState>((set, get) => ({
	courses: [],
	isLoadingCourses: false,
	errorCourses: null,

	loadCourses: async (payload) => {
		const { force, params } = payload || {}
		if (get().isLoadingCourses) {
			return
		}
		if (!force && get().courses.length > 0 && !params) {
			return
		}
		set({ isLoadingCourses: true, errorCourses: null })
		try {
			const data = await fetchCourses(params)
			set({ courses: data, isLoadingCourses: false })
		} catch (e) {
			set({ errorCourses: e as Error, isLoadingCourses: false })
		}
	},

	coursesCount: [],
	isLoadingCoursesCount: false,
	errorCoursesCount: null,

	loadCoursesCount: async (params) => {
		const force = params?.force
		if (get().isLoadingCoursesCount || (get().coursesCount.length > 0 && !force)) {
			return
		}
		set({ isLoadingCoursesCount: true, errorCoursesCount: null })
		try {
			const data = await fetchCoursesCount()
			set({ coursesCount: data, isLoadingCoursesCount: false })
		} catch (e) {
			set({ errorCoursesCount: e as Error, isLoadingCoursesCount: false })
		}
	}
}))
