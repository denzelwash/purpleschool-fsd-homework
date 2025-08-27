import style from './Card.module.css'
import type { CardProps } from './Card.props'

export const Card = ({ children }: CardProps) => {
	return <div className={style.card}>{children}</div>
}
