import classNames from 'classnames'
import style from './Avatar.module.css'
import type { AvatarProps } from './Avatar.props'

export const Avatar = ({ image, alt, size }: AvatarProps) => {
	return (
		<div className={classNames(style.avatar, size && style[size])}>
			<img src={image} alt={alt ?? ''} />
		</div>
	)
}
