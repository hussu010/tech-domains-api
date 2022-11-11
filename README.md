# tech-domains-btc

## Getting started

### Docker

Copy the contents of `.env.example` file to `.env` and update the environment variables.

To build and run the development server

```shell
# have the container up and running
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up --build

# delete the container
docker-compose -f docker-compose.yml -f docker-compose.dev.yml down
```
