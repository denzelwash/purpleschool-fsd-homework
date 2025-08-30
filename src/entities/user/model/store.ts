import { create } from 'zustand'
import { fetchStat } from '../api/requests'
import type { Stats, User } from './types'

interface UserState {
	profile: User | null
	isLoadingProfile: boolean
	errorProfile: Error | null

	stats: Stats[]
	isLoadingStat: boolean
	errorStat: Error | null

	loadStat: (params?: { force: boolean }) => Promise<void>
}

export const useUserStore = create<UserState>((set, get) => ({
	profile: null,
	isLoadingProfile: false,
	errorProfile: null,

	stats: [],
	isLoadingStat: false,
	errorStat: null,

	loadStat: async (params) => {
		const force = params?.force
		if (get().isLoadingStat || (get().stats.length > 0 && !force)) {
			return
		}
		set({ isLoadingStat: true, errorStat: null })
		try {
			const data = await fetchStat()
			set({ stats: data, isLoadingStat: false })
		} catch (e) {
			set({ errorStat: e as Error, isLoadingStat: false })
		}
	}
}))
