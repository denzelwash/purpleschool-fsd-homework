import { createBrowserRouter } from 'react-router'
import { ROUTE_PATH } from '../../shared/config/routes'
import { RootLayout } from '../layouts/index'
import { CoursesPage } from '../../pages/courses'
import { MainPage } from '../../pages/main'

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
				path: ROUTE_PATH.AUTH.BASE,
				children: [
					{
						path: ROUTE_PATH.AUTH.LOGIN,
						element: <div>Login</div>
					},
					{
						path: ROUTE_PATH.AUTH.REGISTER,
						element: <div>Register</div>
					},
					{
						path: ROUTE_PATH.AUTH.RESTORE,
						element: <div>Restore</div>
					}
				]
			},
			{
				path: ROUTE_PATH.COURSES.BASE,
				children: [
					{
						index: true,
						Component: CoursesPage
					},
					{
						path: ROUTE_PATH.COURSES.DETAIL,
						element: <div>Course detail</div>
					}
				]
			},
			{
				path: ROUTE_PATH.SKILL.BASE,
				children: [
					{
						index: true,
						element: <div>Skill</div>
					},
					{
						path: ROUTE_PATH.SKILL.DETAIL,
						element: <div>One skill</div>
					}
				]
			},
			{
				path: ROUTE_PATH.CLUB,
				element: <div>Club</div>
			},
			{
				path: ROUTE_PATH.REFERRAL,
				element: <div>Referral</div>
			},
			{
				path: ROUTE_PATH.PROFILE.BASE,
				children: [
					{
						index: true,
						element: <div>Profile</div>
					},
					{
						path: ROUTE_PATH.PROFILE.DETAIL,
						element: <div>Profile detail</div>
					}
				]
			},
			{
				path: ROUTE_PATH.COMMUNITY,
				element: <div>Community</div>
			},
			{
				path: ROUTE_PATH.HELP,
				element: <div>Help</div>
			},
			{
				path: ROUTE_PATH.ERROR,
				element: <div>Error</div>
			}
		]
	}
])
