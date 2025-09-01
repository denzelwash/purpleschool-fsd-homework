import { useEffect, useState } from 'react'
import style from './Courses.module.css'
import { CardCourse, COURSE_TABS, useCourseStore } from '@/entities/course'
import { Stats, useUserStore } from '@/entities/user'
import { Tabs } from '@/shared/ui'

export const CoursesPage = () => {
	const { courses, isLoadingCourses, errorCourses, loadCourses } = useCourseStore()
	const { coursesCount, loadCoursesCount } = useCourseStore()
	const { stats, isLoadingStats, errorStats, loadStats } = useUserStore()

	const [activeCourseTab, setActiveCourseTab] = useState('my')

	useEffect(() => {
		Promise.all([loadCourses(), loadStats(), loadCoursesCount()])
	}, [loadCourses, loadStats, loadCoursesCount])

	const coursesTemplate = () => {
		return (
			<div>
				{isLoadingCourses && <span>Загрузка курсов...</span>}
				{errorCourses && <span>Ошибка загрузки курсов</span>}
				{!!courses.length && (
					<div className={style['course-grid']}>
						{courses.map((course) => (
							<CardCourse key={course.id} course={course} />
						))}
					</div>
				)}
			</div>
		)
	}

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
			<div>{coursesTemplate()}</div>
			<div>{statsTemplate()}</div>
			<div>{coursesCountTemplate()}</div>
		</>
	)
}
