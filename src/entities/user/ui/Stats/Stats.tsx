import { Icon } from '@/shared/ui'
import style from './Stats.module.css'
import type { StatsProps } from './Stats.props'
import type { Stats as TStats } from '../../model/types'
import type { IconComponentType } from '@/shared/ui'

export const Stats = ({ stats }: StatsProps) => {
	const IconComponent = (alias: TStats['alias']) => {
		let IconComponent: IconComponentType
		if (alias === 'achievements') {
			IconComponent = Icon['Star']
		} else if (alias === 'days') {
			IconComponent = Icon['Star']
		} else {
			IconComponent = Icon['Star']
		}
		return <IconComponent width={24} height={24} />
	}

	return (
		<div className={style.stats}>
			<h2 className={style.title}>Статистика</h2>
			<ul className={style.list}>
				{stats.map((item) => (
					<li className={style.item} key={item.desc}>
						{IconComponent(item.alias)}
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
