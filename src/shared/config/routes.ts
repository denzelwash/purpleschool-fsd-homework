export const ROUTE_PATH = {
	MAIN: '/',
	AUTH: {
		BASE: '/auth',
		LOGIN: '/auth/login',
		REGISTER: '/auth/register',
		RESTORE: '/auth/restore'
	},
	COURSES: {
		BASE: '/courses',
		DETAIL: '/courses/:id'
	},
	SKILL: {
		BASE: '/skill',
		DETAIL: '/skill/:alias'
	},
	CLUB: '/club',
	REFERRAL: '/referral',
	PROFILE: {
		BASE: '/profile',
		DETAIL: '/profile/:alias'
	},
	COMMUNITY: '/community',
	HELP: '/help',
	STORYBOOK: '/storybook',
	ERROR: '*'
} as const
