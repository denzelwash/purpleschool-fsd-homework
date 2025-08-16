import { Outlet } from 'react-router'

export const RootLayout = () => {
	return (
		<div>
			<div>Шапка</div>
			<Outlet />
			<div>Футер</div>
		</div>
	)
}
