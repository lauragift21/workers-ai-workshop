# Lab 3: Run Inference Task in your Worker

Now, let's focus on the main task of this workshop, which is building a ChatGPT-like chatbot capable of answering questions. To make this possible, we'll leverage a Large Language Model (LLM) called Llama 2.

Workers AI provides access to various [models](https://developers.cloudflare.com/workers-ai/models/) for a wide range of applications, from LLM to speech to text and image classification. In this case, we'll be utilizing the `@cf/meta/llama-2-7b-chat-int8` model to develop our chatbot.

To implement this in your `index.js` file, follow these steps:

1. Begin by importing the `Ai` module from the `@cloudflare/ai` package:

```js
import { Ai } from '@cloudflare/ai';
```

2. Configure your Worker by adding the following code:

```js
export default {
	async fetch(request, env) {
		// Create an instance of the AI using the provided environment variable.
		const ai = new Ai(env.AI);

		// Execute an inference task using Llama 2 for a given prompt.
		const response = await ai.run('@cf/meta/llama-2-7b-chat-int8', {
			prompt: 'Who was the first president of Nigeria?',
		});

		// Present the response as a JSON string.
		return new Response(JSON.stringify(response));
	},
};
```

With this code in place, let's update the scripts in the package.json file with the following commands:

```sh
"dev": "wrangler dev --remote",
"start": "wrangler dev --remote",
```

Now we can run the application using:

```sh
npm run dev
```

This will allow you to interact with your chatbot and receive answers to questions in real-time.
