import type { Course } from './types'

export const MOCK_COURSES: Course[] = [
	{
		id: 1,
		title: 'React - Полный Курс',
		desc: 'Описание 1',
		image: 'https://cdn-bucket.hb.bizmrg.com/purple-images/profile-images/c58cc4d0-9b5c-4ebe-b6a9-e789cd82aed2.jpg',
		rating: 4.8,
		price: 6000,
		tags: ['React', 'Frontend']
	},
	{
		id: 2,
		title: 'Node.js для Начинающих',
		desc: 'Описание 2',
		image: 'https://cdn-bucket.hb.bizmrg.com/purple-images/profile-images/e0e2dc73-10d2-407c-9017-27e65bb03585.jpg',
		rating: 4.5,
		price: 15000,
		tags: ['Node.js', 'Backend']
	}
]
