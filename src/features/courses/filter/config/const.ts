import type { CourseDirection, TrainingType } from '../model'

export const DIRECTION_OPTIONS: { id: CourseDirection; label: string }[] = [
	{ id: 'All', label: 'Все' },
	{ id: 'Frontend', label: 'Frontend' },
	{ id: 'Backend', label: 'Backend' },
	{ id: 'DevOps', label: 'DevOps' },
	{ id: 'Mobile', label: 'Mobile' },
	{ id: 'Soft-skills', label: 'Soft-skills' },
	{ id: 'Тестирование', label: 'Тестирование' }
]

export const TRAINING_TYPE_OPTIONS: { id: TrainingType; label: string }[] = [
	{ id: 'All', label: 'Все' },
	{ id: 'Course', label: 'Курс' },
	{ id: 'Career', label: 'Карьера' }
]
