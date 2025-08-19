import { Outlet } from 'react-router'
import { Sidebar } from '../../../widgets/sidebar'

export const RootLayout = () => {
	return (
		<div>
			<Outlet />
			<Sidebar />
		</div>
	)
}
