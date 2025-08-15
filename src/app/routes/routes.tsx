import { createBrowserRouter } from 'react-router'
import { ROUTE_PATH } from '../consts'

export const router = createBrowserRouter([
	{
		path: ROUTE_PATH.HOME,
		// Component: RootLayout
		children: [
			{
				index: true,
				element: <div>Главная</div>
			},
			{
				path: ROUTE_PATH.COMMUNITY,
				element: <div>Community</div>
			},
			{
				path: ROUTE_PATH.CATEGORY,
				element: <div>Category</div>
			},
			{
				path: ROUTE_PATH.ARTICLE.BASE,
				children: [
					{
						path: ROUTE_PATH.ARTICLE.DETAIL,
						element: <div>Article</div>
					}
				]
			},
			{
				path: ROUTE_PATH.PROFILE.BASE,
				children: [
					{
						index: true,
						element: <div>Profile</div>
					},
					{
						path: ROUTE_PATH.PROFILE.EDIT,
						element: <div>Edit profile</div>
					}
				]
			},
			{
				path: ROUTE_PATH.ERROR,
				element: <div>Error</div>
			}
		]
	}
])
