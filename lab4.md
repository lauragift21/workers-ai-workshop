<<<<<<< HEAD
# Lab 4: Customizing the Chatbot Interface

We are going to apply custom styles and behaviors to our chatbot using HTML, TailwindCSS, and JavaScript.

First, create a new JavaScript file named `template.js` in the `src` directory. This file will serve as the HTML template for our chatbot's user interface.

```html
export const html = ``;
```

You will need to import this template into your `index.js` file like so:

```js
import { html } from './template.js';
```
Next, let's modify our server's routing logic. We want to show a chat interface when the user accesses the root path `/`, and we will set up a separate `/ai` path for handling message exchange with the LLM.

```js
const url = new URL(request.url);

if (request.method === 'POST' && url.pathname === '/ai') {
	// rest of the logic goes here
	// ...
}
```
We will wrap the existing logic in a new conditional statement that checks for a `POST` request to the `/ai` endpoint.

Then, we will send the HTML content from `template.js` to the browser as a response.

```js
return new Response(html, {
	headers: {
		'content-type': 'text/html;charset=UTF-8',
=======
# Lab 4: Streaming Responses with Workers AI

This lab will introduce you to the concept and implementation of streaming responses. Unlike the normal approach where the server sends a complete response at once, streaming allows the server to send responses in multiple, smaller chunks. This technique is particularly beneficial for handling large data sets or delivering real-time content.

In the previous lab, we received responses as a single block of data. Now, we'll shift to a streaming response model. Before we proceed, we'll first refine our bot prompt method.

In your working environment, let's begin by entering the following JavaScript code snippet:

```js
const messages = [
	{ role: 'system', content: 'You are an friendly assistant.' },
	{ role: 'user', content: 'What is the weather like?' },
];

const response = await ai.run('@cf/meta/llama-2-7b-chat-int8', {
	messages,
});

return Response.json(response);
```

This piece of code sets up a conversation with your AI assistant, preparing it for interaction in a chat-like manner, based on the system role you have defined.

To stream the response returned from the server, you can add the following code:

```js
const stream = await ai.run('@cf/meta/llama-2-7b-chat-int8', {
	messages,
	stream: true,
});

return new Response(stream, {
	headers: {
		'content-type': 'text/event-stream',
>>>>>>> b85662f (add lab5)
	},
});
```

<<<<<<< HEAD
With these changes, visiting `/` will display an empty page, while `/ai` will show the output that we previously configured.

Now, let's update `template.js` with an HTML boilerplate for our chatbot:

```html
export const html = `
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>ChatGPT Clone App</title>
		<link rel="icon" type="image/x-icon" href="https://openmoji.org/data/color/svg/1F913.svg" />
		<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
	</head>
	<body class="bg-gray-700 text-white h-screen overflow-hidden flex">
		<div class="bg-gray-900 w-1/5 p-6 overflow-auto">
			<h1 class="text-2xl font-bold">ChatGPT Clone App</h1>
			<p class="mt-2 text-gray-400 text-lg">
				Welcome! This app is your personal assistant that is available 24/7 to help with your questions.
			</p>
		</div>

		<div class="flex-1 flex flex-col">
			<div id="message-container" class="flex-1 max-w-full h-full overflow-y-auto"></div>
			<div id="input-container" class="border-t border-gray-600 p-4 flex">
				<textarea
					placeholder="Type your message"
					rows="1"
					class="flex-1 bg-gray-700 max-h-[200px] resize-none rounded p-2 text-white border-none focus:ring-2 text-lg focus:ring-blue-500 outline-none"
					style="height: 50px"
				></textarea>
				<button class="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 ml-4">
					<svg
						stroke="currentColor"
						fill="currentColor"
						stroke-width="0"
						viewBox="0 0 24 24"
						height="1em"
						width="1em"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path fill="none" d="M0 0h24v24H0z"></path>
						<path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
					</svg>
				</button>
			</div>
		</div>
	</body>
</html>
`
```

This template serves as a starting point for your chat interface and can be customized to your liking. To make our chatbot interactive, let's add JavaScript functionality within a `<script>` tag at the bottom of the template:

```js
<script>
  document.addEventListener('DOMContentLoaded', function () {
    const messageContainer = document.getElementById('message-container');
    const inputContainer = document.getElementById('input-container');
    const textBox = inputContainer.querySelector('textarea');

    function appendUserMessage(text) {
      const messageDiv = document.createElement('div');
      messageDiv.className = 'bg-gray-800 text-white text-xl p-16 mx-auto';
      messageDiv.textContent = text;
      messageContainer.appendChild(messageDiv);
      messageContainer.scrollTop = messageContainer.scrollHeight;
    }

    function appendSystemMessage(text) {
      const messageDiv = document.createElement('div');
      messageDiv.className = 'bg-gray-700 text-white text-xl p-16 mx-auto';
      messageDiv.textContent = text;
      messageContainer.appendChild(messageDiv);
      messageContainer.scrollTop = messageContainer.scrollHeight;
    }

    function handleMessageSend() {
      const message = textBox.value.trim();
      if (message) {
        appendUserMessage(message);
        sendMessage(message);
        textBox.value = '';
      }
    }

    inputContainer.querySelector('button').addEventListener('click', handleMessageSend);

    textBox.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleMessageSend();
      }
    });

    async function sendMessage(message) {
      try {
        const response = await fetch('/ai', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message }),
        });

        if (!response.ok) {
          throw new Error('Failed to send message');
        }

        const data = await response.json();
        appendSystemMessage(data.response);

        textBox.value = '';
      } catch (error) {
        appendSystemMessage(error.message);
      }
    }
  });
</script>
```

The provided JavaScript code handles user input, message sending, and displaying responses in the chat interface. Here's a breakdown of its functionality:

- DOMContentLoaded event setup
- Message container and input box selection
- Added a `appendUserMessage` and `appendSystemMessage` Functions to append messages to the chat
- Event listeners for message sending
- The `sendMessage` function that handles the fetch request to the `/ai` endpoint and processes the response

After integrating the template, launch the application with the following command:

```sh
wrangler dev --remote
```
You should now see a chat interface where you can type messages and view responses.

Congratulations! You've successfully built a ChatGPT clone using Cloudflare Workers. The next step is to deploy your application and have it ready to play with.
=======
- By setting stream: true, we indicate that we expect the server to return the data in a streaming fashion.
- The `Response` constructor is initialized with the `stream` object. We set the `content-type` header to `'text/event-stream'` to signify that the server will send a stream of events.

The server will now transmit chunks of response data to the client. Each chunk will be sent as soon as it's ready, allowing for a more efficient and responsive interaction.
>>>>>>> b85662f (add lab5)

