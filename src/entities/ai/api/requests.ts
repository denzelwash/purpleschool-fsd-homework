// import { http } from '@/shared/api'
import type { AiMessage, SendMessageDto } from '../model/types'
import { MOCK_MESSAGE } from '../model/mocks'

export const sendMessageRequest = async (data: SendMessageDto): Promise<AiMessage> => {
	// const response = await http.post<AiMessage>('/ai/chat', data)
	// return response.data
	console.log(data)
	return await new Promise((res) => {
		setTimeout(() => {
			res(MOCK_MESSAGE)
		}, 1000)
	})
}
