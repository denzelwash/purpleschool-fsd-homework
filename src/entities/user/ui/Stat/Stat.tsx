import { Icon } from '@/shared/ui'
import style from './Stat.module.css'
import type { StatProps } from './Stat.props'
import type { Stat as TStat } from '../../model/types'
import type { IconComponentType } from '@/shared/ui'

export const Stat = ({ stat }: StatProps) => {
	const IconComponent = (alias: TStat['alias']) => {
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
		<div className={style.stat}>
			<h2 className={style.title}>Статистика</h2>
			<ul className={style.list}>
				{stat.map((item) => (
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
