# Lab 1: Getting Started

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
