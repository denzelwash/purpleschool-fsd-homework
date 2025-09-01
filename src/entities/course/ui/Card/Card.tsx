import style from './Card.module.css'
import type { CardProps } from './Card.props'
import { Card as CardWrapper, Rating, Tag } from '../../../../shared/ui'
import classNames from 'classnames'

export const Card = ({ course, footerSlot, className }: CardProps) => {
	return (
		<CardWrapper className={classNames(className)}>
			<div className={style.image}>
				<img src={course.image} />
			</div>
			<div className={style.content}>
				<h2>{course.title}</h2>
				<p>{course.desc}</p>
			</div>
			{(course.tags || course.rating) && (
				<div className={style.tags}>
					{course.rating && <Rating icon="Star">{course.rating}</Rating>}
					{course.tags && course.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
				</div>
			)}
			<div className={style.footer}>
				<h2>{course.price}₽/мес</h2>
				{footerSlot}
			</div>
		</CardWrapper>
	)
}
