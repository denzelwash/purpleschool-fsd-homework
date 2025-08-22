import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
import type { IconType } from '../../ui'

export interface RatingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode
	icon: IconType
}
