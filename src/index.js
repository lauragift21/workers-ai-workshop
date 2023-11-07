import { Ai } from '@cloudflare/ai';

export default {
	async fetch(request, env) {
		const ai = new Ai(env.AI)

		// personalize with chat style
		const messages = [
			{ role: 'system', content: 'You are an friendly assistant.' },
			{ role: 'user', content: 'What is the weather like?' },
		]

		const stream = await ai.run('@cf/meta/llama-2-7b-chat-int8', {
			messages,
			stream: true
		});

		return new Response(stream, {
			headers: {
				"content-type": "text/event-stream"
			}
		});
	}
}