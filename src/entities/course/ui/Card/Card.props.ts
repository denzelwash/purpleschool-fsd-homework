import type { ReactNode } from 'react'

export interface CardProps {
	image: string
	title: string
	content: ReactNode
	tags: ReactNode
	footer: ReactNode
}
