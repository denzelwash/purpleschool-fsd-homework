import type { IconType } from '@/shared/ui'

export interface StatProps {
	items: {
		icon: IconType
		count: number
		countSecond?: number
		desc: string
	}[]
}
