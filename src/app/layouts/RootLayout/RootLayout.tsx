import { Outlet } from 'react-router'
import { Sidebar } from '../../../widgets/sidebar'
import styles from './RootLayout.module.css'

export const RootLayout = () => {
	return (
		<div className={styles['root-layout']}>
			<Sidebar />
			<div className={styles.main}>
				<Outlet />
			</div>
		</div>
	)
}
