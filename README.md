# Monorepo Docker Boilerplate

This repository serves as a starting point for setting up a monorepo with Docker, and includes the necessary Dockerfiles and Docker Compose configuration for **local development only**. The following steps to implement after setting up this project would be:

- Extend this setup with Docker configuration for staging and production environments.
- Integrating CI/CD tools like GitHub Actions to automate the deployment process of building Docker images, pushing them to a container registry, and deploying them to your staging and production environments when pull requests are merged.
- Set up and deploy the staging and production environments on remote servers.

The Docker files act as blueprints for building Docker images, in this case, we create both client and server images.

These images serve as templates for running containers, and the containerized environment helps resolve local dependency issues by replicating our development environment. Once the environment is defined in the Dockerfile, it is used to build the environment, which is then saved as an immutable snapshot (the image).

## Project Structure

```
 mono-repo-app
├── apps
|   ├── example-app
│       ├── client      # Vite React-ts application
|          └── Dockerfile.client
│       └── server      # Node.js application
|          └── Dockerfile.server
├── docker-compose.yml  # Docker configuration file specifing what images are required, and which ports to expose.
├── .dockerignore       # Ensure certain files such as local node_modules are not installed on the container.
├── package.json        # Root configuration file for the monorepo
└── tsconfig.json       # Root TypeScript configuration file
```

## Getting Started

### Clone the Repository

```sh
git clone https://github.com/jalonghurst/docker-monorepo-boilerplate.git
cd docker-monorepo-boilerplate
```
### Install dependancies locally 
(Not necessary if you only want to view the application, as Docker will already have the dependancies installed on the container)
```
cd apps/example-app/client
npm install
cd ../server
npm install
```

### Build and Run the Containers for Development
Build and Start the Containers:
```
docker-compose up --build
```

### Access the Application:

Client: Open http://localhost:2000 in your browser.
