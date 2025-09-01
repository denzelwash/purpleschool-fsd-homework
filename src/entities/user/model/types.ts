export interface User {
	name: string
	avatar: string
}

export interface Stats {
	alias: 'days' | 'lessons' | 'achievements'
	count: number
	countSecond?: number
	desc: string
}
