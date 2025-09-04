export interface AiMessage {
	id: string
	text: string
	role: 'user' | 'assistant'
	timestamp: number
}

export interface SendMessageDto {
	text: string
}
