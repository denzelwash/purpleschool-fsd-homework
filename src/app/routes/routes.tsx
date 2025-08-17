import { createBrowserRouter } from 'react-router'
import { ROUTE_PATH } from '../../shared/routes/routes'
import { CategoryPage, MainPage } from '../../pages'
import { RootLayout } from '../layouts/RootLayout'

export const router = createBrowserRouter([
	{
		path: ROUTE_PATH.MAIN,
		Component: RootLayout,
		children: [
			{
				index: true,
				Component: MainPage
			},
			{
				path: ROUTE_PATH.COMMUNITY,
				element: <div>Community</div>
			},
			{
				path: ROUTE_PATH.CATEGORY,
				Component: CategoryPage
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
