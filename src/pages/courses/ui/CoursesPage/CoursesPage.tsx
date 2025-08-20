import { useState } from 'react'
import { Button, Checkbox } from '../../../../shared/ui'

export const CoursesPage = () => {
	const [checked, setChecked] = useState(false)

	return (
		<div>
			<Button>Кнопка</Button>
			<Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)}>
				чекбокс
			</Checkbox>
		</div>
	)
}
