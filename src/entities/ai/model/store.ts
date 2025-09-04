import { create } from 'zustand'
import type { AiMessage, SendMessageDto } from './types'
import { sendMessageRequest } from '../api'

interface AiChatState {
	messages: AiMessage[]
	isLoading: boolean
	error: string | null

	sendMessage: (data: SendMessageDto) => Promise<void>
}

export const useAiChatStore = create<AiChatState>((set) => ({
	messages: [],
	isLoading: false,
	error: null,

	sendMessage: async (data) => {
		const userMessage: AiMessage = {
			id: crypto.randomUUID(),
			text: data.text,
			role: 'user',
			timestamp: Date.now()
		}
		set((state) => ({
			messages: [...state.messages, userMessage],
			isLoading: true,
			error: null
		}))
		try {
			const assistantMessage = await sendMessageRequest(data)
			set((state) => ({
				messages: [...state.messages, assistantMessage]
			}))
		} catch (e) {
			const errorMessage = e instanceof Error ? e.message : 'Произошла неизвестная ошибка'
			set({ error: errorMessage })
		} finally {
			set({ isLoading: false })
		}
	}
}))
