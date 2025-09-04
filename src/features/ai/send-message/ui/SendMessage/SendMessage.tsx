import { useState } from 'react' // Импортируем useState
import { Button, Input } from '@/shared/ui'
import style from './SendMessage.module.css'
import { useAiChatStore } from '@/entities/ai'

export function SendMessage() {
	const [text, setText] = useState('')
	const { sendMessage, isLoading } = useAiChatStore()

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		if (!text.trim() || isLoading) return
		await sendMessage({ text })
		setText('')
	}

	return (
		<form className={style.message} onSubmit={handleSubmit}>
			<Input value={text} label="Спросите что-нибудь..." onChange={(e) => setText(e.target.value)} disabled={isLoading} />
			<Button type="submit" disabled={isLoading || !text.trim()}>
				{isLoading ? '...' : 'Отправить'}
			</Button>
		</form>
	)
}
