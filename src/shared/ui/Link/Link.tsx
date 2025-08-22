import style from './Link.module.css'
import { NavLink } from 'react-router'
import type { LinkProps } from './Link.props'
import { Icon } from '../../ui'
import classNames from 'classnames'

export const Link = ({ url, text, icon }: LinkProps) => {
	const IconComponent = Icon[icon]

	return (
		<NavLink to={url} className={({ isActive }) => classNames([style.link], { [style.active]: isActive })}>
			<IconComponent width={20} height={20} />
			{text}
		</NavLink>
	)
}
