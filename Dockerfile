FROM node:10-alpine as build

RUN apk add --no-cache bash git openssh

# Install
WORKDIR /app
COPY . .
RUN npm i

# Tests
RUN npm run lint

# Release
CMD [ "npx", "semantic-release", "--no-ci" ]