import { useState } from 'react'
import { Button, Card, Checkbox, Graph, InfoBox, Input, Radio, Rating, Tabs, Tag, type TabsProps } from '../../../../shared/ui'
import { Avatar, Stat, type StatProps } from '@/entities/user'
import { Card as CardCourse } from '@/entities/course'
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
			<CardCourse
				title="Frontend разработчик"
				image="https://cdn-bucket.hb.bizmrg.com/purple-images/profile-images/c58cc4d0-9b5c-4ebe-b6a9-e789cd82aed2.jpg"
				content={
					<>
						12 месяцев <br />
						включает 3 курса
					</>
				}
				tags={
					<>
						<Rating icon="Star">4.8</Rating>
						<Tag>tag</Tag>
						<Tag>tag</Tag>
					</>
				}
				footer={
					<>
						<h2>6 000₽/мес</h2>
						<Button>Подробнее</Button>
					</>
				}
			/>
			<Message text="Сообщение" />
		</div>
	)
}
