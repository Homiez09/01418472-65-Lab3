# Docker Commands for Express Demo

Follow these steps to set up and run the Express demo application using Docker.

## Pull the Docker Image

```sh
docker pull homiez09/express-demo:0.1.0
```

## Build the Docker Image

```sh
docker build -t express-demo .
```

## Run the Docker Container

```sh
docker run -p 8000:8000 -d express-demo
```

These commands will pull the specified Docker image, build the Docker image from the Dockerfile, and run the container, making the application accessible on port 8000.