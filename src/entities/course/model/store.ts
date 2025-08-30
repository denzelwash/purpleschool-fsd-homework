import { create } from 'zustand'
import { fetchCourses } from '../api/requests'
import type { Course } from './types'

interface CourseState {
	courses: Course[]
	isLoadingCourses: boolean
	errorCourses: Error | null
	loadCourses: (params?: { force: boolean }) => Promise<void>
}

export const useCourseStore = create<CourseState>((set, get) => ({
	courses: [],
	isLoadingCourses: false,
	errorCourses: null,
	loadCourses: async (params) => {
		const force = params?.force
		if (get().isLoadingCourses || (get().courses.length > 0 && !force)) {
			return
		}
		set({ isLoadingCourses: true, errorCourses: null })
		try {
			const data = await fetchCourses()
			set({ courses: data, isLoadingCourses: false })
		} catch (e) {
			set({ errorCourses: e as Error, isLoadingCourses: false })
		}
	}
}))
