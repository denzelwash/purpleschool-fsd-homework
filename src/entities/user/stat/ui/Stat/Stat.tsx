import { Icon, type IconType } from '@/shared/ui'
import styles from './Stat.module.css'
import type { StatProps } from './Stat.props'

export const Stat = ({ items }: StatProps) => {
	const IconComponent = (iconName: IconType) => {
		const IconComponent = Icon[iconName]
		return <IconComponent width={24} height={24} />
	}

	return (
		<div className={styles.stat}>
			<h2 className={styles.title}>Статистика</h2>
			<ul className={styles.list}>
				{items.map((item) => (
					<li className={styles.item} key={item.desc}>
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
