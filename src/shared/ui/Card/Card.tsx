import classNames from 'classnames'
import style from './Card.module.css'
import type { CardProps } from './Card.props'

export const Card = ({ children, className }: CardProps) => {
	return <div className={classNames(style.card, className)}>{children}</div>
}
