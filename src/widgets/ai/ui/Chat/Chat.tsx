import { useAiChatStore } from '@/entities/ai'
import style from './Chat.module.css'
import { SendMessage } from '@/features/ai/send-message'

export const Chat = () => {
	const { messages } = useAiChatStore()

	return (
		<div className={style.chat}>
			<h2>Чат</h2>
			<div className={style['messages']}>
				{messages.map((message) => (
					<span>{message.text}</span>
				))}
			</div>
			<div>
				<SendMessage />
			</div>
		</div>
	)
}
