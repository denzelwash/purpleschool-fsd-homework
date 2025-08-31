import { create } from 'zustand'
import { fetchStats } from '../api/requests'
import type { Stats, User } from './types'

interface UserState {
	profile: User | null
	isLoadingProfile: boolean
	errorProfile: Error | null

	stats: Stats[]
	isLoadingStats: boolean
	errorStats: Error | null
	loadStats: (params?: { force: boolean }) => Promise<void>
}

export const useUserStore = create<UserState>((set, get) => ({
	profile: null,
	isLoadingProfile: false,
	errorProfile: null,

	stats: [],
	isLoadingStats: false,
	errorStats: null,

	loadStats: async (params) => {
		const force = params?.force
		if (get().isLoadingStats || (get().stats.length > 0 && !force)) {
			return
		}
		set({ isLoadingStats: true, errorStats: null })
		try {
			const data = await fetchStats()
			set({ stats: data, isLoadingStats: false })
		} catch (e) {
			set({ errorStats: e as Error, isLoadingStats: false })
		}
	}
}))
