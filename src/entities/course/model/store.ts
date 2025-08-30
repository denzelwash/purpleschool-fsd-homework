import { create } from 'zustand'
import { fetchCourses } from '../api/requests'
import type { Course } from './types'

interface CourseState {
	courses: Course[]
	isLoading: boolean
	error: Error | null
	loadCourses: () => Promise<void>
}

export const useCourseStore = create<CourseState>((set) => ({
	courses: [],
	isLoading: false,
	error: null,
	loadCourses: async () => {
		set({ isLoading: true, error: null })
		try {
			const data = await fetchCourses()
			set({ courses: data, isLoading: false })
		} catch (e) {
			set({ error: e as Error, isLoading: false })
		}
	}
}))
