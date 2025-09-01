export interface Course {
	id: number
	image: string
	title: string
	desc: string
	price: number
	rating?: number
	tags?: string[]
}

export interface CourseCount {
	alias: 'my' | 'recommended' | 'all'
	text: string
	value: number
}
