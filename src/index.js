import { Ai } from '@cloudflare/ai';
import { html } from './template.js';

export default {
	async fetch(request, env) {

		const url = new URL(request.url);
		if (request.method === 'POST' && url.pathname === '/ai') {
			const ai = new Ai(env.AI);

			const body = await request.json();
			const userMessage = body.message;
			const messages = [
				{ role: 'system', content: 'You are an friendly assistant.' },
				{ role: 'user', content: userMessage },
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
		return new Response(html, {
			headers: {
				"content-type": "text/html;charset=UTF-8"
			}
		});
	}
}