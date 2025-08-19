import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
import type { IconType } from '../Icon/Icon'

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	size: 's' | 'm'
	color: 'orange' | 'red' | 'green' | 'greenLight'
	icon: IconType
	children: ReactNode
}
