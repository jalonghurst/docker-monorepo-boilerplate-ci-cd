# Monorepo Docker Boilerplate

This repository serves as a starting point for setting up a monorepo with Docker.

The Docker files act as blueprints for building Docker images, in this case, we create both client and server images.

These images serve as templates for running containers, and the containerized environment helps resolve local dependency issues by replicating our development environment. Once the environment is defined in the Dockerfile, it is used to build the environment, which is then saved as an immutable snapshot (the image).

## Project Structure

```
 mono-repo-app
├── apps
|   ├── example-app
│       ├── client          # Vite React-ts application
|          └── Dockerfile.client
│       └── server          # Node.js application
|          └── Dockerfile.server
├── docker-compose.yml  # Docker configuration file specifing what images are required, and which ports to expose.
├── package.json        # Root configuration file for the monorepo
└── tsconfig.json       # Root TypeScript configuration file
```


What is left to do currently:

- Run different environments such as staging and production.
- Install tailwind and add configuration.
