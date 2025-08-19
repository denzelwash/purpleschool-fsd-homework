import { NavLink } from 'react-router'
import styles from './Sidebar.module.css'
import { ROUTE_PATH } from '../../../../shared/config'
import classNames from 'classnames'

export const Sidebar = () => {
	const nav = [
		{
			url: ROUTE_PATH.COURSES.BASE,
			name: 'Курсы'
		},
		{
			url: ROUTE_PATH.SKILL.BASE,
			name: 'Карта развития'
		},
		{
			url: ROUTE_PATH.CLUB,
			name: 'PurpleПлюс'
		},
		{
			url: ROUTE_PATH.REFERRAL,
			name: 'Бонусы'
		},
		{
			url: ROUTE_PATH.PROFILE.BASE,
			name: 'Профиль'
		},
		{
			url: ROUTE_PATH.COMMUNITY,
			name: 'Сообщество'
		},
		{
			url: ROUTE_PATH.HELP,
			name: 'Помощь'
		}
	]

	return (
		<nav className={styles.sidebar}>
			{nav.map((item) => {
				return (
					<NavLink className={({ isActive }) => classNames('link', { active: isActive })} to={item.url} key={item.url}>
						{item.name}
					</NavLink>
				)
			})}
		</nav>
	)
}
