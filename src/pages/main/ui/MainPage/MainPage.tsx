import { Link } from 'react-router'
import { ROUTE_PATH } from '../../../../shared'

export const MainPage = () => {
	return (
		<div>
			MainPage
			<Link to={ROUTE_PATH.PROFILE.BASE}>profile</Link>
		</div>
	)
}
