# Lab 2: Connect your Worker to Workers AI

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
