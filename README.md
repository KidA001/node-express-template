# Node Express Server Template
This is a templated Node Express server. This can be run locall as a dockerized container or natively through your terminal. For some examples we added a Redis service, controller endpoints, and a unit test. This template is using NodeExpress, Javascript ES7, and TypeScript and a collaboration between [Devin Frenze](https://github.com/DevinFrenze) and [Brian Vogelgesang](https://github.com/KidA001)

## Non-Docker Instructions

Before following the instructions, use [NVM] to make sure you're using the node version specified in the `.nvmrc`.

### Install dependencies

```sh
npm i
```

### Local Development

```sh
npm run local
```

### Build

```sh
npm run build:dev
npm run build:prod
```

## Docker Instructions
Make sure you have docker installed on your local machine.

To run one of the docker environments locally:
```sh
npm run docker:dev
npm run docker:prod
```

To stop the environment:
```sh
npm run docker:stop
```

## Testing

### Endpoints

Once the server is running (in docker or locally), you can do the following to test the endpoints/services
- Check if server is running: `curl http://localhost:3000/`
- Set values in Redis: `curl http://localhost:3000/store/my-key\?some\=value\&some-other\=otvalue`
- Retrieve values from Redis: `curl curl http://localhost:my-key`

### Linting

```sh
npm run lint
```
or

```sh
npm run lint:fix
```

### Unit Tests

```sh
npm test
```
## Contributing

We're using a package called "Husky" to do linting and testing on git hooks. See the `.huskyrc` for more information or to adjust the configuration. Please feel free to add comments or make a PR.
