export const ROUTE_PATH = {
	HOME: '/',
	COMMUNITY: 'community',
	CATEGORY: ':category',
	RATING: {
		BASE: 'rating',
		DETAIL: ':alias'
	},
	PROFILE: {
		BASE: 'profile',
		EDIT: 'edit'
	},
	ERROR: '*'
} as const
