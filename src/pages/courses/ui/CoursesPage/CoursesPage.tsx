import { useEffect, useState } from 'react'
import { COURSE_TABS, useCourseStore } from '@/entities/course'
import { Tabs } from '@/shared/ui'
import { Stats, useUserStore } from '@/entities/user'
import { FilterCourses } from '@/features/courses-filter'
import { Info } from '@/widgets/user'
import { Chat } from '@/widgets/ai'
import { Catalog } from '@/widgets/course'

export const CoursesPage = () => {
	const { coursesCount, loadCoursesCount } = useCourseStore()
	const { stats, isLoadingStats, errorStats, loadStats } = useUserStore()

	const [activeCourseTab, setActiveCourseTab] = useState('my')

	useEffect(() => {
		Promise.all([loadStats(), loadCoursesCount()])
	}, [loadStats, loadCoursesCount])

	const statsTemplate = () => {
		return (
			<div>
				{isLoadingStats && <span>Загрузка статистики...</span>}
				{errorStats && <span>Ошибка загрузки статистики</span>}
				{!!stats.length && <Stats stats={stats} />}
			</div>
		)
	}

	const coursesCountTemplate = () => {
		if (coursesCount.length === 0) {
			return <Tabs tabs={COURSE_TABS} activeTab={activeCourseTab} onTabChange={(alias) => setActiveCourseTab(alias)} />
		}
		const tabsWithCount = COURSE_TABS.map((tab) => {
			const course = coursesCount.find((course) => course.alias === tab.alias)
			return {
				...tab,
				value: course?.value ?? undefined
			}
		})
		return <Tabs tabs={tabsWithCount} activeTab={activeCourseTab} onTabChange={(alias) => setActiveCourseTab(alias)} />
	}

	return (
		<>
			<Info />
			<FilterCourses />
			<div>{coursesCountTemplate()}</div>
			<div>{<Catalog />}</div>
			<div>{statsTemplate()}</div>
			<Chat />
		</>
	)
}
