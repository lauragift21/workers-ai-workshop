# Lab 6: Deploy your Worker

Before you can deploy your AI Worker globally, you need to follow these steps to ensure everything is set up correctly:

1. Log in to your Cloudflare account by running the following command:

```sh
npx wrangler login
```

2. This command will open a web page where you will be prompted to log in to the Cloudflare dashboard. After logging in, you will be asked for permission to make changes to your Cloudflare account. Scroll down and select "Allow" to grant the necessary permissions.

3. Once you've successfully logged in and granted permission, you are now ready to deploy your Worker and make your project accessible on the internet. To deploy your Worker, execute the following command:

```sh
npx wrangler deploy
```

After deployment, you will receive an output that includes the URL where your project is now accessible, typically in this format: `https://workers-ai-chatgpt-clone.workers.dev`.

Your Chatbot is now deployed and ready for action. Feel free to visit the provided URL to interact with your application.