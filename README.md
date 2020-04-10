# Node Server

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

## Testing endpoints

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

### Testing

```sh
npm test
```

### Git Hooks

We're using a package called "Husky" to manage git hooks. See the `.huskyrc` for
more information or to adjust the configuration.
