import type { ChangeEvent, ReactNode } from 'react'

export interface RadioProps {
	children: ReactNode
	value: string | number
	name: string
	checked: boolean
	onChange: (event: ChangeEvent<HTMLInputElement>) => void
	[x: string]: unknown
}
