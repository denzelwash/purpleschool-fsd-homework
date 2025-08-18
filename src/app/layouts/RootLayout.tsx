import { Outlet } from 'react-router'
import { Footer } from '../../shared'

export const RootLayout = () => {
	return (
		<div>
			<div>Шапка</div>
			<Outlet />
			<Footer />
		</div>
	)
}
