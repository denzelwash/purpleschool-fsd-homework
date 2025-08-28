import style from './Card.module.css'
import type { CardProps } from './Card.props'
import { Card as CardWrapper } from '../../../../shared/ui'

export const Card = ({ image, title, tags, content, footer }: CardProps) => {
	return (
		<CardWrapper>
			<div className={style.image}>
				<img src={image} />
			</div>
			<div className={style.content}>
				<h2>{title}</h2>
				{content}
			</div>
			<div className={style.tags}>{tags}</div>
			<div className={style.footer}>{footer}</div>
		</CardWrapper>
	)
}
