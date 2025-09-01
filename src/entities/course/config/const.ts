interface CourseTab {
	alias: 'my' | 'recommended' | 'all'
	text: string
}

export const COURSE_TABS: CourseTab[] = [
	{
		alias: 'my',
		text: 'Мои курсы'
	},
	{
		alias: 'recommended',
		text: 'Рекомендуемые'
	},
	{
		alias: 'all',
		text: 'Все курсы'
	}
]
