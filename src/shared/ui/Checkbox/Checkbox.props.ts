import type { ChangeEvent, ReactNode } from 'react'

export interface CheckboxProps {
	children: ReactNode
	checked: boolean
	onChange: (event: ChangeEvent<HTMLInputElement>) => void
	[x: string]: unknown
}
