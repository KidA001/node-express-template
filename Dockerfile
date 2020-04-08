FROM node:11-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

RUN if [ "$NODE_ENV" = "development" ]; \
  then npm install;  \
  else npm install --only=production; \
  fi

EXPOSE 3000
