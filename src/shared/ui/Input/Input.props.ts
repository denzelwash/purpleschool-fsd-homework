import type { ChangeEvent } from 'react'

export interface InputProps {
	value: string
	name: string
	label: string
	onChange: (event: ChangeEvent<HTMLInputElement>) => void
	[x: string]: unknown
}
