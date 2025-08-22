import style from './Card.module.css'
import type { CardProps } from './Card.props'

export const Card = ({ image, title, tags, content, footer }: CardProps) => {
	return (
		<div className={style.card}>
			<div className={style.image}>
				<img src={image} />
			</div>
			<div className={style.content}>
				<h2>{title}</h2>
				{content}
			</div>
			<div className={style.tags}>{tags}</div>
			<div className={style.footer}>{footer}</div>
		</div>
	)
}
