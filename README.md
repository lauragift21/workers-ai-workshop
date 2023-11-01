<div>
  <h1 align="center"><a href="https://nigeria.cityjsconf.org/workshop/7LGrikzQ6c1bORXnKSwf2u">Build a ChatGPT Clone with Workers AI Workshop</a></h1>
  <strong>
    Workers AI allows you to run machine learning models, on the Cloudflare network, from your own code – whether that be from Workers, Pages, or anywhere via REST API.
  </strong> 
  <hr />
  <p>
    In this hands-on session, you will learn how to harness the power of Cloudflare's global network and Workers AI to create smart conversational chatbots. By the end of this workshop, you will have the skills to develop your own chatbots capable of engaging in natural and interesting conversations.
  </p>
</div>

## Prerequisites

Before we dive into building your ChatGPT clone, make sure you have the following prerequisites in place:

- __Cloudflare Account__: You'll need an active Cloudflare account. If you don't have one, [sign up at Cloudflare](https://www.cloudflare.com/).

- __Basic Knowledge of JavaScript__: Familiarity with JavaScript will be beneficial, as we will be writing code to deploy the chatbot.

- __A Code Editor__: You should have a code editor of your choice (e.g., Visual Studio Code, Stackblitz, GitHub Codespaces, or any other) installed on your system or accessible on your browser.

## [Lab 1: Getting Started](./lab1.md)

To create a new project named `workers-ai-chatgpt-clone`, follow these steps:

1. Open your command-line interface (CLI) and run the following command:

```sh
npm create cloudflare@latest
```

2. During the setup process, you will be prompted to provide information. Please respond to the prompts as follows:

- For the directory where your project will be created, enter `workers-ai-chatgpt-clone`.
- Choose the `Hello World` script as the type of application you intend to build.
- Opt not to use TypeScript by selecting `No`.
- Opt to use Git by selecting `Yes`.
- Choose not to deploy your application at this point by selecting `No`.

3. Once you've completed these prompts, a new directory named `workers-ai-chatgpt-clone` will be generated, containing the following files:

- A "Hello World" Worker located at `src/index.js`.
- A `wrangler.toml` configuration file.

This configuration will set you up to start working on your project.

To run your application on your local machine, you can use the following command:

```sh
npm run dev
```

This command will launch your application, making it accessible at `http://127.0.0.1:8787/`. You should see a "Hello World" message displayed on the screen.

## Lab 2: Connect your Worker to Workers AI

In this lab, we will establish a connection between our Worker and Workers AI by creating a binding. Bindings serve as a means for Workers to access external resources or services, such as Workers AI on the Cloudflare developer platform. To create this binding, you will need to make modifications to the `wrangler.toml` configuration file.

Here are the steps to bind your Worker AI to your project:

1. Add the following lines to the end of the `wrangler.toml` configuration file:

```sh
[ai]
binding = "AI"  # This will be accessible in your worker as env.AI
```

2. After adding this configuration, proceed to install the Workers AI client library using the following command:

```sh
npm install --save @cloudflare/ai
```

Once the installation is complete, you're ready to move on to the next lab, where you can begin running inference tasks within your Worker.

## Lab 3: Run Inference Task in your Worker

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
      prompt: "Who was the first president of Nigeria?",
    });

    // Present the response as a JSON string.
    return new Response(JSON.stringify(response));
  }
}
```

With this code in place, you can test your Worker locally by running the following command:

```sh
npm run dev
```

This will allow you to interact with your chatbot and receive answers to questions in real-time.

## Lab 4: 

## Lab 5: Deploy your Worker

## Next Steps

Once you've completed this workshop, you're on your way to creating more advanced chatbots and exploring the full potential of Workers AI. Here are some next steps to consider:

<!-- TODO: Add one more to help their chatbot look more like chatgpt they can add a bit of styling / use the shadcdn drop-in component -->

- Modify your chatbot to suit your specific needs. You can teach it industry-specific jargon, incorporate your branding, and tailor its behavior.

- Join the [Cloudflare Discord community](https://discord.gg/cloudflaredev), and share what you've built.

## Additional Resources

To help you along your journey with learning Workers AI, here are some additional resources you can refer to:

- [Workers AI](https://ai.cloudflare.com/): Check out the Workers AI website for more information on its capabilities.
- [Workers AI Docs](https://developers.cloudflare.com/workers-ai/): Dive into the documentation for in-depth knowledge of Workers AI.
- [Workers AI Announcement Post](https://blog.cloudflare.com/workers-ai/): Read the official announcement post to understand the vision and goals of Workers AI.
- [AI Gateway](https://developers.cloudflare.com/ai-gateway/): Explore the AI Gateway, another powerful tool in Cloudflare's AI ecosystem.
- [Vectorize](https://developers.cloudflare.com/vectorize) - Vector Database that enables you to build full-stack, AI-powered applications with Cloudflare Workers.
- [Workers Discord Community](https://discord.gg/cloudflaredev): Got any questions, you can get help from our vibrant discord community.

## Thank You

I hope you enjoyed this workshop! After completing it, I encourage you to share what you've built online, and continue iterating on your chatbot. The world of AI chatbots is vast, and with the tools and knowledge gained here, you have the potential to create amazing conversational experiences.

If you have any questions or run into issues during the workshop, don't hesitate to ask for help during the session. Happy Coding!