import { useEffect, useState } from 'react'
import style from './Courses.module.css'
import { CardCourse, COURSE_TABS, useCourseStore } from '@/entities/course'
import { Tabs } from '@/shared/ui'
import { Stats, useUserStore } from '@/entities/user'
import { useAiChatStore } from '@/entities/ai'
import { GoToCourseDetailsButton } from '@/features/courses/go-to-detail-page'
import { FilterCourses } from '@/features/courses/filter'
import { SendMessage } from '@/features/ai/send-message'

export const CoursesPage = () => {
	const { courses, isLoadingCourses, errorCourses, loadCourses } = useCourseStore()
	const { coursesCount, loadCoursesCount } = useCourseStore()
	const { stats, isLoadingStats, errorStats, loadStats } = useUserStore()
	const { messages } = useAiChatStore()

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
							<CardCourse key={course.id} course={course} footerSlot={<GoToCourseDetailsButton courseId={course.id} />} />
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
			<FilterCourses />
			<div>{coursesTemplate()}</div>
			<div>{statsTemplate()}</div>
			<div>{coursesCountTemplate()}</div>
			<div>
				<h2>Чат</h2>
				<div className={style['messages-grid']}>
					{messages.map((message) => (
						<span>{message.text}</span>
					))}
				</div>
				<div>
					<SendMessage></SendMessage>
				</div>
			</div>
		</>
	)
}
