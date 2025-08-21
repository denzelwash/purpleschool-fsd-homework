import type { IconType } from '../Icon/Icon'

export interface InfoBoxProps {
	icon: IconType
	text: number | string
	desc: string
	link?: string
	onClick?: (link: string) => void
}
