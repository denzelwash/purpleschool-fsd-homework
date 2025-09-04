import { useEffect } from 'react'
import { useCoursesFilterStore } from '../../model'
import { useCourseStore } from '@/entities/course'
import { useDebounce } from '@/shared/lib/useDebounce'
import { Checkbox, Radio } from '@/shared/ui'
import { DIRECTION_OPTIONS, TRAINING_TYPE_OPTIONS } from '../../config'
import style from './FilterCourses.module.css'

export const FilterCourses = () => {
	const { directions, trainingType, toggleDirection, setTrainingType } = useCoursesFilterStore()
	const { loadCourses } = useCourseStore()
	const debouncedDirections = useDebounce(directions, 500)
	const debouncedTrainingType = useDebounce(trainingType, 500)

	useEffect(() => {
		loadCourses({
			params: {
				directions: debouncedDirections,
				trainingType: debouncedTrainingType
			},
			force: true
		})
	}, [debouncedDirections, debouncedTrainingType, loadCourses])

	return (
		<div className={style.filters}>
			<div className={style.filterGroup}>
				<h3 className={style.title}>Направления</h3>
				<div className={style.options}>
					{DIRECTION_OPTIONS.map((option) => (
						<Checkbox
							key={option.id}
							disabled={option.id === 'All' && directions.length === 1 && directions[0] === 'All'}
							checked={directions.includes(option.id)}
							onChange={() => toggleDirection(option.id)}
						>
							{option.label}
						</Checkbox>
					))}
				</div>
			</div>
			<div className={style.filterGroup}>
				<h3 className={style.title}>Тип обучения</h3>
				<div className={style.options}>
					{TRAINING_TYPE_OPTIONS.map((option) => (
						<Radio
							key={option.id}
							name="trainingType"
							value={option.id}
							checked={trainingType === option.id}
							onChange={() => setTrainingType(option.id)}
						>
							{option.label}
						</Radio>
					))}
				</div>
			</div>
		</div>
	)
}
