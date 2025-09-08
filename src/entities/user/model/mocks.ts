import type { Stats, User } from './types'

export const MOCK_STATS: Stats[] = [
	{
		alias: 'achievements',
		count: 8,
		desc: 'Дней без перерыва'
	},
	{
		alias: 'achievements',
		count: 10,
		desc: 'Пройдено уроков'
	},
	{
		alias: 'achievements',
		count: 5,
		countSecond: 10,
		desc: 'Получено достижений'
	}
]

export const MOCK_USER: User = {
	name: 'Имя',
	avatar: 'https://avatars.githubusercontent.com/u/51025480?v=4',
	info: [
		{ text: '3500', desc: 'Бонусов' },
		{ text: '33%', desc: 'Уровень навыков' }
	]
}
