export const ROUTE_PATH = {
	HOME: '/',
	COMMUNITY: 'community',
	CATEGORY: ':category',
	ARTICLE: {
		BASE: 'article',
		DETAIL: ':alias'
	},
	PROFILE: {
		BASE: 'profile',
		EDIT: 'edit'
	},
	ERROR: '*'
} as const
