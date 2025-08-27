import { Outlet } from 'react-router'
import { Sidebar } from '../../../widgets/sidebar'
import style from './RootLayout.module.css'

export const RootLayout = () => {
	return (
		<div className={style['root-layout']}>
			<Sidebar />
			<div className={style.main}>
				<Outlet />
			</div>
		</div>
	)
}
