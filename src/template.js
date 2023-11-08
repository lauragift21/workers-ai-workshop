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
		<div class="bg-gray-900 w-80 p-6 overflow-auto">
			<h1 class="text-2xl font-bold">ChatGPT Clone App</h1>
			<p class="mt-2 text-gray-400 text-md">
				Welcome! This app is your personal assistant that is available 24/7 to help with your questions.
			</p>
		</div>

		<div class="flex-1 flex flex-col">
			<div id="message-container" class="flex-1 max-w-xl h-full"></div>
			<div id="input-container" class="border-t border-gray-600 p-4 flex">
				<textarea
					placeholder="Type your message"
					rows="1"
					class="flex-1 bg-gray-700 max-h-[200px] resize-none rounded p-2 text-white border-none focus:ring-2 focus:ring-blue-500 outline-none"
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

		<script>
			document.addEventListener('DOMContentLoaded', function () {
				const messageContainer = document.getElementById('message-container');
				const inputContainer = document.getElementById('input-container');
				const textBox = inputContainer.querySelector('textarea');

				function appendMessage(text) {
					const messageDiv = document.createElement('div');
					messageDiv.className = 'bg-gray-700 text-white p-4 rounded-lg max-w-lg mx-auto my-2';
					messageDiv.textContent = text;
					messageContainer.appendChild(messageDiv);
					messageContainer.scrollTop = messageContainer.scrollHeight;
				}

				function handleMessageSend() {
					const message = textBox.value.trim();
					if (message) {
						appendMessage(message);
						sendMessage(message);
						textBox.value = '';
					}
				}

				inputContainer.querySelector('button').addEventListener('click', handleMessageSend);

				textBox.addEventListener('keypress', function (event) {
					if (event.key === 'Enter') {
						handleMessageSend();
					}
				});

				function sendMessage(message) {
					fetch('/ai', {
						method: 'POST',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify({ message }),
					})
						.then((response) => {
							if (!response.ok) {
								return Promise.reject(new Error('Failed to send message'));
							}
							return response;
						})
						.catch((error) => {
							appendMessage(error.message);
						});
				}
			});
		</script>
	</body>
</html>
`