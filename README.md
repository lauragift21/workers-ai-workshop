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

## Lab 1: Getting Started

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

This setup will prepare you to begin working on your project.

## Deploy your Worker


## Next Steps

Once you've completed this workshop, you're on your way to creating more advanced chatbots and exploring the full potential of Workers AI. Here are some next steps to consider:

<!-- TODO: Add one more to help their chatbot look more like chatgpt they can add a bit of styling / use the shadcdn drop-in component -->

- Modify your chatbot to suit your specific needs. You can teach it industry-specific jargon, incorporate your branding, and tailor its behavior.

- Join the Cloudflare Discord community, and share what you've built.

## Additional Resources

To help you along your journey with learning Workers AI, here are some additional resources you can refer to:

- [Workers AI](https://ai.cloudflare.com/): Check out the Workers AI website for more information on its capabilities.
- [Workers AI Docs](https://developers.cloudflare.com/workers-ai/): Dive into the documentation for in-depth knowledge of Workers AI.
- [Workers AI Announcement Post](https://blog.cloudflare.com/workers-ai/): Read the official announcement post to understand the vision and goals of Workers AI.
- [AI Gateway](https://developers.cloudflare.com/ai-gateway/): Explore the AI Gateway, another powerful tool in Cloudflare's AI ecosystem.
- [Vectorize](https://developers.cloudflare.com/vectorize) - Vector Database that enables you to build full-stack, AI-powered applications with Cloudflare Workers.

## Thank You

I hope you enjoyed this workshop! After completing it, I encourage you to share what you've built online, and continue iterating on your chatbot. The world of AI chatbots is vast, and with the tools and knowledge gained here, you have the potential to create amazing conversational experiences.

If you have any questions or run into issues during the workshop, don't hesitate to ask for help during the session. Happy Coding!