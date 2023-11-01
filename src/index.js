import { Ai } from '@cloudflare/ai';

export default {
	async fetch(request, env) {
		const ai = new Ai(env.AI)

		const response = await ai.run('@cf/meta/llama-2-7b-chat-int8', {
			prompt: 'Who was the first president of Nigeria?'
		})

		return new Response(JSON.stringify(response), {
			headers: {
				'content-type': 'application/json;charset=UTF-8',
			},
		})
	}
}