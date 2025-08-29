import style from './Sidebar.module.css'
import { Link } from '../../../../shared/ui'
import { nav } from '../../model/nav'

export const Sidebar = () => {
	return (
		<div className={style.sidebar}>
			<nav className={style.nav}>
				{nav.map((item) => (
					<Link key={item.url} url={item.url} text={item.name} icon={item.icon}></Link>
				))}
			</nav>
		</div>
	)
}
