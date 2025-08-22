import classNames from 'classnames'
import style from './Tabs.module.css'
import type { TabsProps } from './Tabs.props'

export const Tabs = ({ tabs, activeTab, onTabChange }: TabsProps) => {
	return (
		<div className={style.tabs}>
			{tabs.map((tab) => (
				<button key={tab.alias} onClick={() => onTabChange(tab.alias)} className={classNames({ [style.active]: activeTab === tab.alias })}>
					<span>{tab.text}</span>
					<i>{tab.value}</i>
				</button>
			))}
		</div>
	)
}
