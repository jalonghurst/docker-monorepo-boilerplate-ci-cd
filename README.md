# Mono Repo Docker Boilerplate

This repository serves as a starting point for setting up a monorepo with Docker.

## Project Structure

```
 mono-repo-app
├── apps
|   |--example-app
│      ├── client          # Vite React-ts application
│      └── server          # Node.js application
├── docker              # Docker configuration files
├── package.json        # Root configuration file for the monorepo
└── tsconfig.json       # Root TypeScript configuration file
```


What is left to do currently:

- Fix: The client-server application is running in Docker, but the data isn't being sent or received properly, even though the Docker container is running the image.
- Install tailwind and add configuration.
