import { create } from 'zustand'
import { fetchStats, fetchUser } from '../api'
import type { Stats, User } from './types'

interface UserState {
	user: User | null
	isLoadingUser: boolean
	errorUser: Error | null

	loadUser: () => Promise<void>

	stats: Stats[]
	isLoadingStats: boolean
	errorStats: Error | null

	loadStats: (params?: { force: boolean }) => Promise<void>
}

export const useUserStore = create<UserState>((set, get) => ({
	user: null,
	isLoadingUser: false,
	errorUser: null,

	loadUser: async () => {
		set({ isLoadingUser: true, errorUser: null })
		try {
			const data = await fetchUser()
			set({ user: data, isLoadingUser: false })
		} catch (e) {
			set({ errorUser: e as Error, isLoadingUser: false })
		}
	},

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
