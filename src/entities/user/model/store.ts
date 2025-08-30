import { create } from 'zustand'
import { fetchStat } from '../api/requests'
import type { Stat } from './types'

interface StatState {
	stat: Stat[]
	isLoadingStat: boolean
	errorStat: Error | null
	loadStat: (params?: { force: boolean }) => Promise<void>
}

export const useStatStore = create<StatState>((set, get) => ({
	stat: [],
	isLoadingStat: false,
	errorStat: null,
	loadStat: async (params) => {
		const force = params?.force
		if (get().isLoadingStat || (get().stat.length > 0 && !force)) {
			return
		}
		set({ isLoadingStat: true, errorStat: null })
		try {
			const data = await fetchStat()
			set({ stat: data, isLoadingStat: false })
		} catch (e) {
			set({ errorStat: e as Error, isLoadingStat: false })
		}
	}
}))
