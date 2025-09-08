import { GoToCourseDetailsButton } from '@/features/courses-go-to-detail-page'
import style from './Catalog.module.css'
import { CardCourse, useCourseStore } from '@/entities/course'
import { useEffect } from 'react'

export const Catalog = () => {
	const { courses, isLoadingCourses, errorCourses, loadCourses } = useCourseStore()

	useEffect(() => {
		loadCourses()
	}, [loadCourses])

	return (
		<div>
			{isLoadingCourses && <span>Загрузка курсов...</span>}
			{errorCourses && <span>Ошибка загрузки курсов</span>}
			{!!courses.length && (
				<div className={style['catalog']}>
					{courses.map((course) => (
						<CardCourse key={course.id} course={course} footerSlot={<GoToCourseDetailsButton courseId={course.id} />} />
					))}
				</div>
			)}
		</div>
	)
}
