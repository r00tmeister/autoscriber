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
## Environment Variables

This project uses environment variables for configuration. To set up your environment variables:

1. Copy the `.env.example` file in the root directory of the project and rename it to `.env`:

    ```bash
    cp .env.example .env
    ```

2. Open the `.env` file and replace the placeholder values with your actual values. For example, replace `your_supabase_url` with the URL of your Supabase instance, and replace `your_supabase_api_key` with your actual Supabase API key.

    ```env
    # .env
    NUXT_ENV_SUPABASE_URL=https://xyzcompany.supabase.co
    NUXT_ENV_SUPABASE_API_KEY=123456789abcdef
    ```

3. Save the `.env` file. The application will now use the values from this file for its configuration.

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
