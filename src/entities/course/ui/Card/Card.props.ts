import type { ReactNode } from 'react'
import type { Course } from '../../model/types'

export interface CardProps {
	course: Course
	footerSlot?: ReactNode
	className?: string
}
