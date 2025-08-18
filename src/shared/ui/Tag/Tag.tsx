import cn from 'classnames'

import styles from './Tag.module.css'
import type { TagProps } from './Tag.props'
import { Icon } from '../../../assets/Icon/Icon'

export const Tag = ({ icon, size, color, children, className }: TagProps) => {
	const IconComponent = Icon[icon]

	const renderChildren = () => {
		if (typeof children === 'string') {
			return <span>{children}</span>
		}
		return children
	}

	return (
		<div className={cn(styles.tag, styles[color], styles[size], className)}>
			<IconComponent />
			{renderChildren()}
		</div>
	)
}
