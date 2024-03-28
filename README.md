# Autoscriber Application

This is a Nuxt.js application that is containerized using Docker.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the latest version of [Docker](https://www.docker.com/products/docker-desktop) and [Docker Compose](https://docs.docker.com/compose/install/).

## Setup

Follow these steps to get your development environment set up:

1. Clone the repository:
    ```bash
    git clone https://github.com/r00tmeister/autoscriber.git
    ```

2. Navigate to the project directory:
    ```bash
    cd autoscriber
    ```

## Running the Application

To start the application in development mode, run:

```bash
docker-compose -p autoscriber up --build
```
This command builds the Docker image and starts the Docker container. The application will be accessible at `http://localhost:3000`.

## Documentation

For more details on working with Nuxt.js, refer to the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction).

For information on deploying Nuxt.js applications, check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment).

## Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for more details.

## License

This project is licensed under the [MIT License](LICENSE.md).
