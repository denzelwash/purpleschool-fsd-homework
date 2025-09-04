import { Button, Input } from '@/shared/ui'
import style from './SendMessage.module.css'
import { useState } from 'react'

export function SendMessage() {
	const [message, setMessage] = useState('')

	return (
		<div className={style.message}>
			<Input value={message} label="" onChange={(e) => setMessage(e.target.value)}></Input>
			<Button>Отправить</Button>
		</div>
	)
}
