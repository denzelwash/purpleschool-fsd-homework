import { useState } from 'react'
import style from './Courses.module.css'
import { Button, Card, Checkbox, Graph, InfoBox, Input, Radio, Rating, Tabs, Tag, type TabsProps } from '../../../../shared/ui'
import { Avatar, Stat, type StatProps } from '@/entities/user'
import { CardCourse, MOCK_COURSES } from '@/entities/course'
import { Message } from '@/entities/ai'

const tabs: TabsProps['tabs'] = [
	{
		alias: 'my-courses',
		text: 'Мои курсы',
		value: 3
	},
	{
		alias: 'recommended-courses',
		text: 'Рекомендуемые',
		value: 2
	},
	{
		alias: 'all-courses',
		text: 'Все курсы',
		value: 30
	}
]

const stat: StatProps['items'] = [
	{
		icon: 'Star',
		count: 10,
		desc: 'Дней без перерыва'
	},
	{
		icon: 'Star',
		count: 10,
		desc: 'Пройдено уроков'
	},
	{
		icon: 'Star',
		count: 8,
		countSecond: 11,
		desc: 'Получено достижений'
	}
]

export const CoursesPage = () => {
	const [checkbox, setCheckbox] = useState(false)
	const [radio, setRadio] = useState('')
	const [input, setInput] = useState('')
	const [activeTab, setActiveTab] = useState(tabs[0].alias)

	return (
		<div>
			<Button>Кнопка</Button>
			<Checkbox checked={checkbox} onChange={(e) => setCheckbox(e.target.checked)}>
				чекбокс
			</Checkbox>
			<Radio name="radio" value="first" checked={radio === 'first'} onChange={(e) => setRadio(e.target.value)}>
				радио баттон first
			</Radio>
			<Radio name="radio" value="second" checked={radio === 'second'} onChange={(e) => setRadio(e.target.value)}>
				радио баттон second
			</Radio>
			<Input label="input" name="input" value={input} onChange={(e) => setInput(e.target.value)} />
			<Tabs tabs={tabs} activeTab={activeTab} onTabChange={(value) => setActiveTab(value)} />
			<Graph>
				<div>График</div>
			</Graph>
			<InfoBox text={3500} desc="Бонусов" icon="Check" link="referral" onClick={console.log} />
			<div>
				<Tag>tag</Tag>
			</div>
			<div>
				<Rating icon="Star">4.8</Rating>
			</div>
			<Card>Карточка обертка</Card>
			<Avatar image="https://avatars.githubusercontent.com/u/51025480?v=4" size="lg" alt="Денчик"></Avatar>
			<Stat items={stat}></Stat>
			<div className={style['course-grid']}>
				{MOCK_COURSES.map((course) => (
					<CardCourse key={course.id} course={course} />
				))}
			</div>
			<Message text="Сообщение" />
		</div>
	)
}
