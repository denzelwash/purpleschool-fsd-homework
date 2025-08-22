import style from './InfoBox.module.css'
import { Icon } from '../../ui'
import type { InfoBoxProps } from './InfoBox.props'
import classNames from 'classnames'

export const InfoBox = ({ icon, text, onClick, link, desc }: InfoBoxProps) => {
	const IconComponent = Icon[icon]

	const handleClick = () => {
		if (onClick && link !== undefined) {
			onClick(link)
		}
	}

	return (
		<div className={classNames(style['info-box'], { [style.link]: onClick && link })} onClick={handleClick}>
			<IconComponent width={24} height={24} />
			<div className={style.text}>
				<b>{text}</b>
				<span>{desc}</span>
			</div>
		</div>
	)
}
