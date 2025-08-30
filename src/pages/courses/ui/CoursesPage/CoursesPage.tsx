import { useEffect } from 'react'
import style from './Courses.module.css'
import { CardCourse, useCourseStore } from '@/entities/course'

export const CoursesPage = () => {
	const { courses, isLoading, error, loadCourses } = useCourseStore()

	useEffect(() => {
		loadCourses()
	}, [loadCourses])

	const coursesTemplate = () => {
		return (
			<div>
				{isLoading && <span>Загрузка курсов...</span>}
				{error && <span>Ошибка загрузки курсов</span>}
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

	return <div>{coursesTemplate()}</div>
}
