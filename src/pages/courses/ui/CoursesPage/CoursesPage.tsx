import { useEffect } from 'react'
import style from './Courses.module.css'
import { CardCourse, useCourseStore } from '@/entities/course'
import { Stat, useStatStore } from '@/entities/user'

export const CoursesPage = () => {
	const { courses, isLoadingCourses, errorCourses, loadCourses } = useCourseStore()
	const { stat, isLoadingStat, errorStat, loadStat } = useStatStore()

	useEffect(() => {
		loadCourses()
	}, [loadCourses])

	useEffect(() => {
		loadStat()
	}, [loadStat])

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

	const statTemplate = () => {
		return (
			<div>
				{isLoadingStat && <span>Загрузка статистики...</span>}
				{errorStat && <span>Ошибка загрузки статистики</span>}
				{!!stat.length && <Stat stat={stat} />}
			</div>
		)
	}

	return (
		<>
			<div>{coursesTemplate()}</div>
			<div>{statTemplate()}</div>
		</>
	)
}
