import { Icon, type IconType } from '@/shared/ui'
import style from './Stat.module.css'
import type { StatProps } from './Stat.props'

export const Stat = ({ items }: StatProps) => {
	const IconComponent = (iconName: IconType) => {
		const IconComponent = Icon[iconName]
		return <IconComponent width={24} height={24} />
	}

	return (
		<div className={style.stat}>
			<h2 className={style.title}>Статистика</h2>
			<ul className={style.list}>
				{items.map((item) => (
					<li className={style.item} key={item.desc}>
						{IconComponent(item.icon)}
						<div>
							<b>
								{item.count}
								{item.countSecond && <span>/{item.countSecond}</span>}
							</b>
							<p>{item.desc}</p>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}
