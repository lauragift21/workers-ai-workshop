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
	},
});
```

- By setting stream: true, we indicate that we expect the server to return the data in a streaming fashion.
- The `Response` constructor is initialized with the `stream` object. We set the `content-type` header to `'text/event-stream'` to signify that the server will send a stream of events.

The server will now transmit chunks of response data to the client. Each chunk will be sent as soon as it's ready, allowing for a more efficient and responsive interaction.

