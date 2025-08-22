import { Icon } from '../Icon/Icon'
import style from './Rating.module.css'
import type { RatingProps } from './Rating.props'

export const Rating = ({ children, icon }: RatingProps) => {
	const IconComponent = Icon[icon]

	return (
		<div className={style.rating}>
			<IconComponent />
			{children}
		</div>
	)
}
