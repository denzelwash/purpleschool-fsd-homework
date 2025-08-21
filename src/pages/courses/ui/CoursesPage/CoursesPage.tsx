import { useState } from 'react'
import { Button, Checkbox, Input, Radio, Tabs, type TabsProps } from '../../../../shared/ui'

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
		</div>
	)
}
