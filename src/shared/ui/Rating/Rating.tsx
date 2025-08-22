import { Icon } from '../../ui'
import style from './Rating.module.css'
import type { RatingProps } from './Rating.props'

export const Rating = ({ children, icon }: RatingProps) => {
	const IconComponent = Icon[icon]

	return (
		<div className={style.rating}>
			<IconComponent width={16} height={16} />
			{children}
		</div>
	)
}
