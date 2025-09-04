import type { AiMessage } from './types'

export const MOCK_MESSAGE: AiMessage = {
	id: '1',
	text: 'Ответ ai...',
	role: 'assistant',
	timestamp: Number(new Date())
}
