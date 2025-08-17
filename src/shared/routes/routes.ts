export const ROUTE_PATH = {
	MAIN: '/',
	COMMUNITY: '/community',
	CATEGORY: '/:alias',
	ARTICLE: {
		BASE: '/article',
		DETAIL: '/article/:alias'
	},
	PROFILE: {
		BASE: '/profile',
		EDIT: '/profile/edit'
	},
	ERROR: '*'
} as const
