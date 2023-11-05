import { Ai } from '@cloudflare/ai';

export default {
	async fetch(request, env) {
		const ai = new Ai(env.AI)

		// personalize with chat style
		const messages = [
			{ role: 'system', content: 'You are a friendly assistant.' },
			{ role: 'user', content: 'What is the weather like?' },
		]

		const response = await ai.run('@cf/meta/llama-2-7b-chat-int8', {
			messages,
		})

		return Response.json(response);
}
}