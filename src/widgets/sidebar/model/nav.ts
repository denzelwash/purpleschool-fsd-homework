import { ROUTE_PATH } from '../../../shared/config'
import type { IconType } from '../../../shared/ui'

type NavItem = {
	url: string
	name: string
	icon: IconType
}

export const nav: NavItem[] = [
	{
		url: ROUTE_PATH.COURSES.BASE,
		name: 'Курсы',
		icon: 'Star'
	},
	{
		url: ROUTE_PATH.SKILL.BASE,
		name: 'Карта развития',
		icon: 'Star'
	},
	{
		url: ROUTE_PATH.CLUB,
		name: 'PurpleПлюс',
		icon: 'Star'
	},
	{
		url: ROUTE_PATH.REFERRAL,
		name: 'Бонусы',
		icon: 'Star'
	},
	{
		url: ROUTE_PATH.PROFILE.BASE,
		name: 'Профиль',
		icon: 'Star'
	},
	{
		url: ROUTE_PATH.COMMUNITY,
		name: 'Сообщество',
		icon: 'Star'
	},
	{
		url: ROUTE_PATH.HELP,
		name: 'Помощь',
		icon: 'Star'
	},
	{
		url: ROUTE_PATH.STORYBOOK,
		name: 'Компоненты интерфейса',
		icon: 'Star'
	}
]
