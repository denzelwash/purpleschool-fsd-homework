import { useState } from 'react'
import { Button, Checkbox, Input, Radio } from '../../../../shared/ui'

export const CoursesPage = () => {
	const [checkbox, setCheckbox] = useState(false)
	const [radio, setRadio] = useState('')
	const [input, setInput] = useState('')

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
		</div>
	)
}
