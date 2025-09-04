import { create } from 'zustand'
import { type CourseDirection, type TrainingType } from './types'

interface FilterState {
	directions: CourseDirection[]
	trainingType: TrainingType
}

interface FilterActions {
	toggleDirection: (direction: CourseDirection) => void
	setTrainingType: (type: TrainingType) => void
	resetFilters: () => void
}

const initialState: FilterState = {
	directions: ['All'],
	trainingType: 'All'
}

export const useCoursesFilterStore = create<FilterState & FilterActions>((set) => ({
	...initialState,

	toggleDirection: (direction) => {
		set((state) => {
			if (direction === 'All') {
				return { directions: ['All'] }
			}
			const newDirections = state.directions.filter((d) => d !== 'All' && d !== direction)
			if (!state.directions.includes(direction)) {
				newDirections.push(direction)
			}
			if (newDirections.length === 0 || newDirections.length === 6) {
				return { directions: ['All'] }
			}
			return { directions: newDirections }
		})
	},

	setTrainingType: (type) => {
		set({ trainingType: type })
	},

	resetFilters: () => {
		set(initialState)
	}
}))
